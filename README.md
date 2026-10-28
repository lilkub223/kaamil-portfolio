# Kaamil Khan — Software Engineering Portfolio

This is my personal software engineering portfolio. I recently graduated from DePaul University with a B.S. in Computer Science, and I built this site to share my work and give people a better idea of what I like building.

My main interests are backend development, full-stack applications, APIs, and software reliability.

## What's on the site

The site includes my projects, technical skills, work experience, and resume, along with links to my GitHub, LinkedIn, and email.

I feature four projects: Readlytics, LLM Software Testing Assistant, OurPascal Compiler, and Nutrition App. Each has a short case study covering what it does, my contributions, and some implementation and testing details. There are also diagrams to help explain how the projects fit together.

## Tech Stack

I built the portfolio with Next.js, React, TypeScript, and Tailwind CSS, with custom CSS for the layout and project diagrams.

## Getting Started

With Node.js and npm installed, install the dependencies:

```sh
npm ci
```

Start the development server:

```sh
npm run dev
```

Open [localhost:3000](http://localhost:3000) in your browser.

## Checks and Tests

Run linting, create a production build, and run the browser tests:

```sh
npm run lint
npm run build
npm run test:browser
```

The browser tests require Google Chrome to be installed.

To run the smoke checks, start the production server after building:

```sh
npm run start
```

Then, in another terminal:

```sh
npm run test:smoke
```

See [QA.md](QA.md) for detailed testing and verification results.
