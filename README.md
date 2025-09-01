# Juan Miguel Arias Mejias Portfolio

This is a Nuxt 3 + Vuetify portfolio site for **Juan Miguel Arias Mejias**, full-stack developer specializing in Go and Vue.js.

## Setup

```bash
npm install
npm run dev
```

## Build & Preview

```bash
npm run build
npm run preview
```

## Deployment

### Vercel
1. Push this repository to GitHub.
2. Import the repo in [Vercel](https://vercel.com/new) and select the `npm run build` and `npm run preview` commands.
3. Deploy.

### Netlify
1. Push this repository to GitHub.
2. On [Netlify](https://app.netlify.com/start), connect the repo and set the build command to `npm run build` and publish directory to `.output/public`.
3. Deploy.

## Components
- `NavigationBar` – top navigation with dark/light mode toggle.
- `HeroSection`, `ServicesSection`, `ProjectsSection`, `MetricsSection`, `RecomendationsSection`, `TechStackSection`, `ContactForm` – main page sections.
- `AppFooter` – footer with links.

## Responsive Design
This site uses Vuetify's grid system and custom SCSS for mobile-first responsive layouts. All images use [placehold.co](https://placehold.co) placeholders.
