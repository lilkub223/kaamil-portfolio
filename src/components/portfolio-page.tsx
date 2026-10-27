import { portfolioData as data } from "@/data/portfolio";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { ProjectCard } from "./project-card";
import { Arrow, GithubIcon } from "./icons";

export function PortfolioPage() {
  return (
    <div id="top">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <section className="container hero" aria-labelledby="hero-title">
          <div className="hero-topline">
            <p className="eyebrow">Kaamil Khan / Software engineer</p>
            <span className="availability">
              <i /> Open to early-career roles
            </span>
          </div>
          <h1 id="hero-title">
            Reliable systems.
            <br />
            <span>Useful software.</span>
          </h1>
          <div className="hero-bottom">
            <div>
              <p className="hero-intro">
                I build backend services and full-stack applications with Java,
                Python, and React—with a focus on clear APIs, reliable data, and
                thoughtful testing.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">
                  View my work <Arrow />
                </a>
                <a
                  className="button button-secondary"
                  href={data.links.resume}
                  target="_blank"
                  rel="noreferrer"
                >
                  View resume <Arrow diagonal />
                </a>
              </div>
            </div>
            <div className="hero-aside">
              <span>Based in Chicago, IL</span>
              <div>
                <a href={data.links.github} target="_blank" rel="noreferrer">
                  <GithubIcon /> GitHub <Arrow diagonal />
                </a>
                <a href={data.links.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn <Arrow diagonal />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="container work section"
          aria-labelledby="work-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / Selected work</p>
              <h2 id="work-title">From API to application.</h2>
            </div>
            <p>
              Four projects. Different problems.
              <br /> A closer look at how I build.
            </p>
          </div>
          <ProjectCard project={data.projects[0]} featured />
          <div className="project-pair">
            {data.projects.slice(1, 3).map((project) => (
              <ProjectCard project={project} key={project.slug} />
            ))}
          </div>
          <ProjectCard project={data.projects[3]} compact />
        </section>

        <section
          id="about"
          className="about-section section"
          aria-labelledby="about-title"
        >
          <div className="container about-grid">
            <div className="about-copy">
              <p className="eyebrow">02 / About & expertise</p>
              <h2 id="about-title">
                Good software starts
                <br /> with the fundamentals.
              </h2>
              <p>
                I’m Kaamil, a Computer Science graduate from DePaul University.
                I like working through how a system fits together: the API
                boundaries, the data underneath, and the tests that make changes
                easier to trust.
              </p>
              <p>
                My project work spans distributed applications, Java backends,
                and compiler construction. I’ve collaborated on full-stack
                applications and enjoy connecting engineering fundamentals to
                practical product problems.
              </p>
              <div className="education">
                <strong>DePaul University</strong>
                <span>B.S. Computer Science · June 2026</span>
                <span>3.9 GPA · Dean’s List, 2022–2026</span>
              </div>
            </div>
            <div className="skills" id="skills">
              <h3>My engineering toolkit</h3>
              <p className="skills-intro">
                Technologies I’ve used in projects and coursework.
              </p>
              <dl>
                {data.skillGroups.map((group) => (
                  <div className="skill-row" key={group.title}>
                    <dt>{group.title}</dt>
                    <dd>{group.items}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section
          id="experience"
          className="container section experience-section"
          aria-labelledby="experience-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / Experience</p>
              <h2 id="experience-title">A practical perspective.</h2>
            </div>
            <p>
              Troubleshooting, data accuracy, and
              <br /> problem-solving in real environments.
            </p>
          </div>
          <div className="experience-list">
            {data.experience.map((item) => (
              <article className="experience-row" key={item.company}>
                <div className="experience-date">
                  {item.dates}
                  <span>{item.location}</span>
                </div>
                <div>
                  <h3>{item.company}</h3>
                  <p className="experience-role">{item.role}</p>
                  <p>{item.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="container contact-section section"
          aria-labelledby="contact-title"
        >
          <div className="contact-panel">
            <div>
              <p className="eyebrow">04 / What’s next</p>
              <h2 id="contact-title">
                Let’s build
                <br />
                something useful.
              </h2>
              <p>
                I’m looking for my next opportunity in backend or full-stack
                software engineering, with testing and reliability as part of
                the craft.
              </p>
              <a className="contact-email" href={`mailto:${data.email}`}>
                {data.email} <Arrow diagonal />
              </a>
            </div>
            <div className="contact-links">
              <span className="availability">
                <i /> Open to new graduate & early-career roles
              </span>
              <a href={data.links.resume} target="_blank" rel="noreferrer">
                View resume <Arrow diagonal />
              </a>
              <a href={data.links.resume} download>
                Download resume <span>PDF ↓</span>
              </a>
              <a href={data.links.linkedin} target="_blank" rel="noreferrer">
                LinkedIn <Arrow diagonal />
              </a>
              <a href={data.links.github} target="_blank" rel="noreferrer">
                GitHub <Arrow diagonal />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
