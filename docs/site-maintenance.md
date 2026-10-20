# Jianan Chen Portfolio

Personal portfolio for Jianan Chen, built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

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

## Local redesign review

The design uses a graphite palette, editorial typography, and lightweight CSS memory diagrams. No additional runtime packages are required. All published research and project content remains in `lib/site-data.ts`.

Run `npm ci`, then `npm run dev`, and open http://localhost:3000. The mobile navigation is available below 760px. The personal index uses explicit buttons; motion respects `prefers-reduced-motion`. All content is visible before JavaScript loads.

Validation commands:

```powershell
npm run lint
npx tsc --noEmit
npm run build
# Verify the Pages variant separately:
$env:GITHUB_ACTIONS = 'true'
$env:GITHUB_REPOSITORY = 'DrJonaC/DrJonaC'
npm run build
# Clear these variables before ordinary local development:
Remove-Item Env:GITHUB_ACTIONS, Env:GITHUB_REPOSITORY
```

`next start` does not serve this static-export configuration. Use `npm run dev` for development, or a static server for `out/`; mount the Pages export under `/DrJonaC/`.
