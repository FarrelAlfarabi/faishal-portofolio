# Faishal Zuhair — Portfolio

Personal portfolio website built with React. Deploys to Vercel via GitHub.

## Quick start

```bash
npm install
npm start
```

Opens at `http://localhost:3000`.

## Adding your photo

Drop two images into `/public/`:
- `hero.jpg` — portrait photo for the hero section (recommended: ~600×700px, vertical crop)
- `about.jpg` — secondary photo for the About section (any ratio, 600px wide min)

Then replace the placeholder divs in `src/App.js`:

```jsx
// Hero section — replace the placeholder div with:
<img src="/hero.jpg" alt="Faishal Zuhair" />

// About section — replace the placeholder div with:
<img src="/about.jpg" alt="About Faishal" style={{ borderRadius: 'var(--radius-lg)', width: '100%', height: '100%', objectFit: 'cover' }} />
```

## Updating content

All content lives in `src/data.js`. Edit the single exported object — names, skills, experience bullets, publications, etc.

## Contact form

The form in the Contact section uses [Formspree](https://formspree.io). To activate it:
1. Sign up at formspree.io
2. Create a new form, get your form ID (looks like `xpzgkwrb`)
3. In `src/App.js`, replace `YOUR_FORM_ID` in the form action URL

## CV download

Place your CV file at `public/cv.pdf`. The "Download CV" button in the nav and footer will link to it automatically.

## Deploy to Vercel via GitHub

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Vercel auto-detects Create React App — just click Deploy
4. Done. Every push to `main` re-deploys automatically.

The `vercel.json` already handles the OpenSSL legacy provider needed for React 17 + newer Node.

## Deploy to GitHub Pages

### Option 1: Using gh-pages package

1. Install gh-pages as a dev dependency:
   ```bash
   npm install gh-pages --save-dev
   ```

2. Add the following scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. Update the `homepage` field in `package.json`:
   ```json
   "homepage": "https://FarrelAlfarabi.github.io/faishal-portofolio"
   ```

4. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

### Option 2: Using GitHub Actions

1. Go to your repository Settings → Pages
2. Under "Source", select "GitHub Actions"
3. Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [ main ]
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: '16'
             cache: 'npm'
         - run: npm ci
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./build
   ```

4. Push to main branch to trigger deployment

### Repository Setup

This project is configured for deployment to:
- GitHub Repository: https://github.com/FarrelAlfarabi/faishal-portofolio.git
- GitHub Pages URL: https://FarrelAlfarabi.github.io/faishal-portofolio

## Customizing colors

All design tokens are in `src/App.css` under `:root`. The accent color is navy (`#1e40af`) and the highlight color is gold (`#c9972a`). Change `--accent` and `--gold` to match any palette you prefer.
