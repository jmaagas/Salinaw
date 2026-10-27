# Salinaw — 1st Issue: _Unfinished Business_

A slow-reading e-magazine about the ideas Rizal argued for: education that frees people instead of sorting them, power that has to answer to the people it governs, indifference as something learned (so it can be unlearned), honest memory, and love for a country you may have had to leave.

The magazine is about the ideas, not the man. His life appears as subtext, set quietly beside scenes from the Philippines today. Every essay ends with small civic actions a reader can actually take.

## What's inside

- **Cover (****`/`****)** — The issue cover, a cold open, the table of contents, a teaser for the field guide, and an editor's note that shows Rizal's portrait exactly once.
- **Five essays (****`/essays/:slug`****)** — _The Window_ (corruption), _The Cabinet_ (education), _The Feed_ (civic indifference), _The Footnotes_ (history and memory), and _The Distance_ (migration). Each essay pairs a "Now" scene with a "Once" scene, gives readers a private margin for answering a reflection question, and ends with a short "Try this" list. Sources are available in a collapsible note to keep the reading experience uncluttered.
- **Field guide (****`/field-guide`****)** — Thirteen small acts of civic nationalism, grouped by how much time they take. Readers can mark what they plan to do and what they have done. Progress is saved locally on their own device.
- **Credits (****`/credits`****)** — Photo references, sources behind the essays, and a design note on Republic Act No. 8491.

## Images and credits

- **Archival photographs** are public-domain photographs from Wikimedia Commons depicting Rizal and people close to him, including his mother, Leonor Rivera, Ferdinand Blumentritt, and members of the Madrid circle. Each image includes its citation in the bottom-right corner and links back to its Wikimedia Commons page.
- **Contemporary illustrations** depict present-day scenes created for this issue and are identified accordingly.
- Image attribution and source information are documented in the magazine's credits and relevant image citations.
- Images are served through the application's configured asset pipeline. Production assets are delivered through the Cloudflare-hosted application; the site no longer depends on Netlify's Image CDN.

When adding or replacing images, preserve the appropriate attribution, licensing information, and source links. Future commissioned artwork should include clear usage permissions and artist credits.

## Technology

Salinaw is built with:

- **TanStack Start** — React application framework and server rendering.
- **React 19** — UI components.
- **TanStack Router** — File-based routing and navigation.
- **Vite** — Development server and build tooling.
- **Tailwind CSS 4** — Styling.
- **shadcn/ui primitives** — UI component foundations.
- **TypeScript** — Application and content types.
- **pnpm** — Package management.
- **Cloudflare Workers** — Production hosting and server-side execution.

Editorial content lives in typed TypeScript modules under `src/content/`.

There is no application backend or remote database. Reader margins and field-guide progress use browser `localStorage`, keeping this reader-specific data on the reader's device.

## Hosting and deployment

**Production platform:** Cloudflare Workers

**Production URL:** https://salinaw.matthewagasstudyacc.workers.dev

**Cloudflare Worker name:** `salinaw`

Cloudflare is the production hosting and deployment platform. Netlify is no longer part of the site's writing, development, preview, or production workflow.

The GitHub repository is the source of truth for the project's code:

https://github.com/jmaagas/Salinaw

The `main` branch is the designated production branch.

### Deployment configuration

The project uses a root-level `wrangler.jsonc` configuration together with TanStack Start and the Cloudflare Vite plugin. The build generates a server-side Wrangler configuration at `dist/server/wrangler.json`, which references the compiled server entry point and client assets.

The generated server configuration must be used for deployment rather than relying on a stale client-side Wrangler configuration.

From the project root, build the application:

powershell

```
pnpm run build
```

After a successful build, the known-good manual deployment command is:

powershell

```
npx.cmd wrangler deploy --config dist/server/wrangler.json
```

On Windows PowerShell, `npx.cmd` can be used when PowerShell's execution policy prevents the `npx` script from running.

For significant deployment or configuration changes, perform a dry run first:

powershell

```
npx.cmd wrangler deploy --config dist/server/wrangler.json --dry-run
```

Before deploying, confirm that the generated configuration:

- Names the Worker `salinaw`.
- Uses `index.js` as the server entry point.
- Serves client assets from `../client`.

After deployment, verify the production homepage, essay routes, and relevant images.

**Important:** The commands above document the known-good manual deployment procedure. They do not imply that a GitHub push automatically deploys the application. Any automatic deployment workflow must be verified against the actual Cloudflare configuration.

## Development setup

### Requirements

- Node.js compatible with the versions and dependencies specified by the project.
- pnpm.
- Access to the GitHub repository.
- Cloudflare access and appropriate permissions only when deployment is required.

Use the repository's existing package manager configuration and lockfile. Do not regenerate dependencies or change runtime versions without a clear reason.

### Run locally

Clone the repository and enter the project directory:

bash

```
git clone https://github.com/jmaagas/Salinaw.git
cd Salinaw
```

Install dependencies:

bash

```
pnpm install
```

Start the development server:

bash

```
pnpm dev
```

Open [http://localhost:3000](<http://localhost:3000>) in your browser.

### Available scripts

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Start the local Vite development server on port 3000. |
| `pnpm run build` | Build the application for production. |
| `pnpm run typecheck` | Run TypeScript checks without emitting files. |
| `pnpm run lint` | Run ESLint. |
| `pnpm run format` | Format files with Prettier. |
| `pnpm run format:check` | Check formatting without rewriting files. |
| `pnpm test` | Run the Vitest test suite. |
| `pnpm run preview` | Start Vite's preview server. |

The preview script is a local build-preview utility; it is not a production deployment mechanism.

## Development workflow

1. **Start from the repository.** GitHub is the source of truth. Inspect the current branch and working-tree status before making changes.
2. **Preserve existing work.** Do not discard uncommitted changes, regenerate configuration indiscriminately, or overwrite files without reviewing their current contents.
3. **Make focused changes.** Prefer small, reviewable changes over unnecessary rewrites or migrations.
4. **Verify the result.** Run the relevant type checks, tests, linting, or production build according to the scope of the change.
5. **Review the diff.** Confirm that unrelated content, configuration, and assets remain intact.
6. **Commit and push deliberately.** Use the repository's normal Git workflow and review changes before they reach the production branch.
7. **Deploy intentionally.** Production deployments use Cloudflare Workers. Obtain the appropriate approval before deploying changes that affect the live site.
8. **Verify production.** After an approved deployment, check the live site and affected routes.

Development and deployment should remain distinct. A successful local build does not automatically update production, and a successful Git push does not establish that a Cloudflare deployment has occurred.

## Project principles

- **Ideas over personality.** Rizal's life provides context, but the magazine centers the ideas and their relevance today.
- **Slow reading over endless scrolling.** The editorial experience should encourage reflection rather than maximize consumption.
- **Civic action over empty exhortation.** Essays should leave readers with practical actions they can take.
- **Honest sourcing.** Historical photographs, research sources, and future commissioned artwork must retain appropriate credits and permissions.
- **Human-centered visual direction.** As the magazine evolves, commissioned work by human artists can gradually replace AI-generated illustrations, guided by editorial fit, artistic quality, licensing, and available resources.
- **Preservation over unnecessary rewrites.** Existing content, working infrastructure, and established configuration should be retained unless a change is justified.

## Contributing and future development

Future work may include editorial refinements, accessibility improvements, responsive design adjustments, performance improvements, and the gradual introduction of commissioned artwork.

When scouting artists or integrating new work, document the relevant portfolio, agreed usage rights, attribution requirements, and image specifications. Do not publish commissioned artwork until the necessary permissions have been established.

For technical changes, keep content, application logic, and deployment configuration appropriately separated. Preserve the working Cloudflare setup when modifying routes, dependencies, image handling, or build tooling.

## License and usage

Consult the repository's license and individual asset credits before reusing the project's code, editorial content, photographs, or illustrations. Public-domain status, attribution requirements, and usage permissions should be established for each asset rather than assumed for the entire publication.