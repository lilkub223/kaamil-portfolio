import assert from "node:assert/strict";

const base = process.argv[2] || "http://127.0.0.1:3000";
const routes = [
  "/",
  "/projects/readlytics",
  "/projects/llm-software-testing-project",
  "/projects/ourpascal-compiler",
  "/projects/nutrition-app",
];
for (const route of routes) {
  const response = await fetch(new URL(route, base));
  assert.equal(response.status, 200, `${route} should load`);
  const html = await response.text();
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `${route} needs one h1`);
  assert.ok(html.includes("og:image"), `${route} needs a social image`);
  assert.ok(
    !html.includes("http://localhost:3000"),
    `${route} must use production metadata`,
  );
  for (const [, id] of html.matchAll(/href="\/#([^"?]+)"/g)) {
    if (route === "/")
      assert.ok(html.includes(`id="${id}"`), `Missing anchor #${id}`);
  }
  console.log(`PASS ${route}: HTTP 200, heading, metadata, anchors`);
}
const pdf = await fetch(new URL("/resume/kaamil-khan-resume.pdf", base));
assert.equal(pdf.status, 200);
assert.ok(pdf.headers.get("content-type")?.includes("application/pdf"));
assert.equal(
  Buffer.from(await pdf.arrayBuffer())
    .subarray(0, 5)
    .toString(),
  "%PDF-",
);
console.log("PASS resume: valid PDF response");
for (const image of ["/opengraph-image", "/twitter-image"]) {
  const response = await fetch(new URL(image, base));
  assert.equal(response.status, 200);
  assert.ok(response.headers.get("content-type")?.includes("image/png"));
  assert.equal(
    Buffer.from(await response.arrayBuffer())
      .subarray(1, 4)
      .toString(),
    "PNG",
  );
  console.log(`PASS ${image}: generated PNG`);
}
const missing = await fetch(new URL("/projects/missing-project", base));
assert.equal(missing.status, 404);
const legacy = await fetch(
  new URL("/projects/stock-exchange-simulator", base),
  { redirect: "manual" },
);
assert.equal(legacy.status, 308);
assert.equal(legacy.headers.get("location"), "/#projects");
console.log("PASS missing project: 404; legacy project: permanent redirect");
for (const route of ["/robots.txt", "/sitemap.xml"]) {
  const response = await fetch(new URL(route, base));
  assert.equal(response.status, 200);
  const text = await response.text();
  assert.ok(text.includes("https://kaamil-portfolio-one.vercel.app"));
  assert.ok(!text.includes("localhost"));
  console.log(`PASS ${route}: production URLs`);
}
