# Qatar 2022 — Legacy Showcase

A preserved frontend from a friends' prediction pool for the Qatar 2022 FIFA World Cup. This project showcases the original homepage and historical tournament content.

This is a static legacy showcase. Participant data, predictions, and match results are bundled with the app. Login, live score updates, and prediction submissions are not active; any remaining forms are part of the original interface.

## What's included

- Original World Cup homepage and navigation
- Historical fixtures and match results
- Participant rankings and saved predictions
- Participant profile views accessed from the homepage
- Local country flag images

## Tech stack

React 18, Create React App, React Router 6, Material UI, styled-components, and date-fns. No backend, database, or environment variables are required.

## Local development

Install Node.js and npm, then run these commands from the repository root:

```sh
npm ci
npm start
```

The development server normally opens at `http://localhost:3000`.

## Production build

```sh
CI=true npm run build
```

The static website is generated in `build/`.

## Tests

```sh
CI=true npm test -- --watchAll=false --runInBand
```

The routing tests cover direct profile visits without navigation data and profile rendering with participant data.

## Deploy to Vercel

1. Push the project to your Git repository, including `vercel.json`, `src/Data/CountryFlags.js`, and `src/assets/img/flags/`.
2. Import the repository as a new Vercel project.
3. Use the repository root as the Root Directory and deploy.

The included `vercel.json` configures:

- Framework preset: Create React App
- Build command: `npm run build`
- Output directory: `build`
- A rewrite to `index.html` so direct links reach React Router

Vercel builds the app from source. Keep `node_modules/` and `build/` out of Git.

## Routing

Unknown routes return to the homepage. Opening `/profile` without the navigation data supplied by a homepage participant link also returns to the homepage.

The Vercel rewrite serves `index.html` for application routes so React Router can handle direct links.

## Project structure

```text
public/             HTML template and public assets
src/assets/         Images, local flags, and global styles
src/components/     Shared UI components
src/Data/           Historical data and country mappings
src/layouts/        Navigation and footer
src/pages/          Homepage and legacy screens
vercel.json         Build and routing configuration
```
