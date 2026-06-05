
# Scarlett Baptism Site

This is a code bundle for Scarlett Baptism Site. The original project is available at https://www.figma.com/design/PZ4miveyE0qNQysDZuc2tk/Design-Suggestion-Request.

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

## GitHub Pages deployment

This project is configured to deploy to GitHub Pages from the `gh-pages` branch using GitHub Actions.

The workflow builds the site and publishes `./dist` to the `gh-pages` branch via `peaceiris/actions-gh-pages@v4`.

No extra repository secrets are required for deployment; the action uses `GITHUB_TOKEN`.

After pushing to GitHub, the workflow at `.github/workflows/pages.yml` will build and deploy the `dist` folder.
  