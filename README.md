
# Scarlett Baptism Site

This is a code bundle for Scarlett Baptism Site. The original project is available at https://www.figma.com/design/PZ4miveyE0qNQysDZuc2tk/Design-Suggestion-Request.

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

## GitHub Pages deployment

This project is configured to deploy to GitHub Pages from the `main` branch using GitHub Actions.

The workflow uses `actions/configure-pages@v4` with automatic enablement. That requires a repository secret named `PAGES_TOKEN` containing a GitHub personal access token with `repo` scope and Pages write permission.

After pushing to GitHub, the workflow at `.github/workflows/pages.yml` will build and deploy the `dist` folder.
  