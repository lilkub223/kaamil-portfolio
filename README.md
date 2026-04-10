# Kaamil Khan Portfolio

Recruiting-focused software engineering portfolio built with Next.js and Tailwind CSS.

## Local access

1. Open a terminal in `/Users/kaamilkhan/Downloads/New project/portfolio-site`
2. Run `npm install`
3. Run `npm run dev`
4. Open `http://localhost:3000`

## Production build

1. Run `npm install`
2. Run `npm run build`
3. Run `npm start`

## Put it on a real URL

### Fastest path: Vercel

1. Push `portfolio-site` to a GitHub repository.
2. Go to [Vercel](https://vercel.com/).
3. Import the GitHub repo.
4. Set the root directory to `portfolio-site`.
5. Add the environment variable `NEXT_PUBLIC_SITE_URL` with your deployed URL.
   Example: `https://kaamilkhan.dev`
6. Deploy.

### Custom domain

1. Buy a domain from a registrar such as Namecheap, Porkbun, or Google Domains.
2. In Vercel, open the project settings and add the domain.
3. Follow the DNS instructions Vercel gives you.
4. Once the domain is connected, update `NEXT_PUBLIC_SITE_URL` to that final domain.

## Analytics

The app includes `@vercel/analytics/react`. If you deploy on Vercel, enable Analytics in the project dashboard.

## Content updates

Most portfolio content is centralized in `src/data/portfolio.ts`.

## Resume file

The live resume PDF is served from `public/resume/kaamil-khan-resume.pdf`.
