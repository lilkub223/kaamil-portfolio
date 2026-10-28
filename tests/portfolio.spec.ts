import { test, expect } from "@playwright/test";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";

const slugs = [
  "readlytics",
  "llm-software-testing-project",
  "ourpascal-compiler",
  "nutrition-app",
];
const widths = [1920, 1440, 1280, 1024, 768, 430, 390, 375, 320];
for (const width of widths) {
  test(`all pages fit and diagrams remain readable at ${width}px`, async ({
    page,
  }, info) => {
    await page.setViewportSize({ width, height: 900 });
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => {
      if (message.type() === "error") errors.push(message.text());
    });
    for (const route of ["/", ...slugs.map((slug) => `/projects/${slug}`)]) {
      const response = await page.goto(route);
      expect(response?.status()).toBe(200);
      await page.evaluate(() => document.fonts.ready);
      await expect(page.locator("h1")).toBeVisible();
      const audit = await page.evaluate(() => {
        const visible = (e: Element) =>
          e.getBoundingClientRect().width > 0 &&
          e.getBoundingClientRect().height > 0;
        return {
          width: innerWidth,
          scrollWidth: document.documentElement.scrollWidth,
          outside: [...document.querySelectorAll("main *")]
            .filter(visible)
            .filter((e) => {
              const r = e.getBoundingClientRect();
              return r.left < -1 || r.right > innerWidth + 1;
            })
            .map((e) => e.className),
          clipped: [...document.querySelectorAll(".project-visual")]
            .filter(
              (e) =>
                e.scrollHeight > e.clientHeight + 1 ||
                e.scrollWidth > e.clientWidth + 1,
            )
            .map((e) => e.className),
          tinyLabels: [
            ...document.querySelectorAll(
              ".project-visual span,.project-visual strong,.project-visual small,.project-visual code,.pipeline>div",
            ),
          ]
            .filter(visible)
            .filter((e) => parseFloat(getComputedStyle(e).fontSize) < 10)
            .map((e) => e.textContent),
        };
      });
      expect(audit.scrollWidth).toBeLessThanOrEqual(width);
      expect(audit.outside).toEqual([]);
      expect(audit.clipped).toEqual([]);
      expect(audit.tinyLabels).toEqual([]);
      await page.reload();
      await expect(page.locator("h1")).toBeVisible();
      if (route === "/" && [1440, 390, 320].includes(width))
        await page.screenshot({
          path: info.outputPath(`home-${width}.png`),
          fullPage: true,
        });
      if (route === "/projects/readlytics" && width === 390)
        await page.screenshot({
          path: info.outputPath("readlytics-mobile.png"),
          fullPage: true,
        });
    }
    expect(errors).toEqual([]);
  });
}

test("section navigation, active states, direct anchors, and native history", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");
  const nav = page.getByRole("navigation", { name: "Main navigation" });
  for (const [label, id] of [
    ["Work", "projects"],
    ["About", "about"],
    ["Experience", "experience"],
    ["Contact", "contact"],
  ]) {
    await nav.getByRole("link", { name: label, exact: true }).click();
    await expect(page).toHaveURL(new RegExp(`#${id}$`));
    await expect
      .poll(() =>
        page
          .locator(`#${id}`)
          .evaluate((e) => Math.round(e.getBoundingClientRect().top)),
      )
      .toBeGreaterThanOrEqual(70);
    await expect(
      nav.getByRole("link", { name: label, exact: true }),
    ).toHaveAttribute("aria-current", "location");
  }
  await page.goBack();
  await expect(page).toHaveURL(/#experience$/);
  await expect(
    nav.getByRole("link", { name: "Experience", exact: true }),
  ).toHaveAttribute("aria-current", "location");
  await page.goForward();
  await expect(
    nav.getByRole("link", { name: "Contact", exact: true }),
  ).toHaveAttribute("aria-current", "location");
  for (const id of ["projects", "about", "experience", "contact"]) {
    await page.goto(`/#${id}`);
    await expect
      .poll(() =>
        page
          .locator(`#${id}`)
          .evaluate((e) => Math.round(e.getBoundingClientRect().top)),
      )
      .toBeGreaterThanOrEqual(70);
  }
  await page.getByRole("link", { name: "Kaamil Khan, home" }).click();
  await expect.poll(() => page.evaluate(() => scrollY)).toBe(0);
  expect(
    await page
      .locator("header")
      .evaluate((e) => getComputedStyle(e).backgroundColor),
  ).toBe("rgb(250, 251, 248)");
});

test("mobile menu: keyboard, focus, resize and outside dismissal", async ({
  page,
}) => {
  await page.setViewportSize({ width: 320, height: 900 });
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Skip to content" }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("#main")).toBeFocused();
  const menu = page.getByRole("button", { name: "Menu", exact: true });
  await menu.click();
  await expect(
    page.getByRole("button", { name: "Close", exact: true }),
  ).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Escape");
  await expect(menu).toBeFocused();
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await menu.click();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "About", exact: true })
    .click();
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await expect(page.locator("#about")).toBeFocused();
  await expect
    .poll(() =>
      page
        .locator("#about")
        .evaluate((e) => Math.round(e.getBoundingClientRect().top)),
    )
    .toBe(86);
  await menu.click();
  await page.locator("#about-title").click();
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await menu.click();
  await page.setViewportSize({ width: 1024, height: 900 });
  await page.setViewportSize({ width: 390, height: 900 });
  await expect(menu).toHaveAttribute("aria-expanded", "false");
});

test("projects, contact, external links, and real resume download", async ({
  page,
  request,
}) => {
  await page.goto("/");
  for (const [index, slug] of slugs.entries()) {
    await page.locator(".project-links .text-link").nth(index).click();
    await expect(page).toHaveURL(new RegExp(`/projects/${slug}$`));
    await expect(
      page.getByRole("heading", { name: "Testing & validation", exact: true }),
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "View source" }),
    ).toHaveAttribute("href", `https://github.com/lilkub223/${slug}`);
    await page
      .getByRole("link", { name: "← All projects", exact: true })
      .click();
  }
  await expect(page.locator(".contact-email")).toHaveAttribute(
    "href",
    "mailto:kaamil12355@icloud.com",
  );
  await expect(
    page.locator(".contact-links a").filter({ hasText: "LinkedIn" }),
  ).toHaveAttribute(
    "href",
    "https://www.linkedin.com/in/kaamil-khan-52555b282/",
  );
  await expect(
    page.locator(".contact-links a").filter({ hasText: "GitHub" }),
  ).toHaveAttribute("href", "https://github.com/lilkub223");
  for (const link of await page.locator('a[target="_blank"]').all())
    expect(await link.getAttribute("rel")).toMatch(/noreferrer|noopener/);
  const downloadEvent = page.waitForEvent("download");
  await page.getByRole("link", { name: "Download resume" }).click();
  const download = await downloadEvent;
  expect(download.suggestedFilename()).toMatch(/\.pdf$/);
  const file = await download.path();
  const hash = (b: Buffer) => createHash("sha256").update(b).digest("hex");
  expect(hash(await readFile(file!))).toBe(
    hash(await readFile("public/resume/kaamil-khan-resume.pdf")),
  );
  const resume = await request.get("/resume/kaamil-khan-resume.pdf");
  expect(resume.headers()["content-type"]).toContain("application/pdf");
});

test("reduced motion and 200% text scaling retain usable content", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto("/");
  expect(
    await page
      .locator("html")
      .evaluate((e) => getComputedStyle(e).scrollBehavior),
  ).toBe("auto");
  // Double rendered typography without changing layout widths, a stricter text-only zoom check.
  await page.evaluate(() => {
    const elements = [...document.querySelectorAll("body *")];
    const sizes = elements.map((e) => parseFloat(getComputedStyle(e).fontSize));
    elements.forEach((e, i) => {
      if (e instanceof HTMLElement) e.style.fontSize = `${sizes[i] * 2}px`;
    });
  });
  expect(
    await page.evaluate(() => document.documentElement.scrollWidth),
  ).toBeLessThanOrEqual(1280);
  await expect(
    page.getByRole("heading", { name: "Reliable systems. Useful software." }),
  ).toBeVisible();
});
