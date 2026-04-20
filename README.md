# Jianan Chen Portfolio

High-end personal portfolio for Jianan Chen, built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Stack

- Next.js 15
- React 19
- Tailwind CSS 4
- Framer Motion

## Local development

```bash
npm install
npm run dev
```

## Deployment

### Vercel

This project is ready for Vercel with no extra configuration.

1. Import the repository into Vercel.
2. Keep the framework preset as `Next.js`.
3. Optionally set `NEXT_PUBLIC_SITE_URL` to your production domain.
4. Deploy.

### GitHub Pages

This repo includes a GitHub Actions workflow at `.github/workflows/deploy-github-pages.yml`.

1. Push the project to a GitHub repository.
2. In GitHub, open `Settings -> Pages`.
3. Set the source to `GitHub Actions`.
4. Push to `main` or manually run the workflow.

The workflow builds a static export into `out/` and deploys it automatically.
