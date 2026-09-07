# Ubaid Khan — AI Engineer Portfolio

A futuristic, responsive personal portfolio built with **React + Vite + Framer Motion + Lucide React**.

## Features

- Dark futuristic AI-lab visual design
- Red + blue neon accents
- Real profile photo included in `public/profile.jpeg`
- Mouse-follow 3D tilt cards
- Smooth motion and responsive layout
- GitHub API integration — repositories load automatically from `Ubaid-Khan0`
- GitHub profile stats loaded automatically
- Featured project matching for the existing repositories
- About, skills, projects, experience, GitHub and contact sections
- GitHub + LinkedIn links
- Mobile contact button
- CV slot prepared

## Run locally

Requirements: Node.js 18+ recommended.

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite.

## Add your CV

Put your PDF at:

`public/resume.pdf`

Then add a normal download link in `src/App.jsx`, for example:

```jsx
<a href="/resume.pdf" download>Download CV</a>
```

## Deploy to Vercel

1. Create a GitHub repository.
2. Upload this project.
3. Import the repository into Vercel.
4. Framework preset: Vite.
5. Build command: `npm run build`.
6. Output directory: `dist`.
7. Deploy.

No backend server or API key is required for the public GitHub API used here.

## Update your information

Main content is in `src/App.jsx`.

Useful constants at the top:

- `GITHUB_USER`
- `GITHUB_URL`
- `LINKEDIN_URL`
- `PHONE`
- `EMAIL`

## Important

GitHub's unauthenticated API has rate limits. For a personal portfolio this is normally fine; the page also has a graceful fallback if the request fails.
