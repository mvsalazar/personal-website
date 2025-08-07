# Personal Website

A modern, fast, and responsive personal website built with [Vite](https://vitejs.dev/), [React](https://react.dev/), and [TypeScript](https://www.typescriptlang.org/). Deployed seamlessly to GitHub Pages using GitHub Actions.

---

## 🚀 Features

- ⚡️ Fast bundling with Vite
- ⚛️ React for UI components
- 🔒 TypeScript for type safety
- 🎨 TailwindCSS for styling
- 🖼️ Image and static asset support
- 🌐 Deployed automatically on push to `main`

---

## 📦 Tech Stack

- **Frontend**: React, TypeScript, TailwindCSS
- **Build Tool**: Vite
- **Deployment**: GitHub Pages via GitHub Actions

---

## 🛠️ Local Development

### Prerequisites

- Node.js 20+

### Install Dependencies

```bash
npm install
```

### Start Dev Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

---

## 🚚 Deployment

Deployment is handled automatically by GitHub Actions whenever changes are pushed to the `main` branch.

### CI Deploy (GitHub Actions)

GitHub Actions uses the following command for deployment:

```bash
npm run deploy:ci
```

This runs:

```json
"deploy:ci": "gh-pages -d dist -u \"github-actions-bot <support+actions@github.com>\" -r https://x-access-token:${GITHUB_TOKEN}@github.com/{{YOUR_GITHUB_USER_NAME}}/personal-website.git"
```

> Note: `${GITHUB_TOKEN}` is automatically provided by GitHub Actions.

### Manual Deploy (Local)

To deploy manually from your local machine:

```bash
npm run deploy
```

This runs:

```json
"deploy": "gh-pages -d dist"
```

Make sure you have proper GitHub authentication configured locally (e.g., via SSH or a GitHub CLI session).

---

## 📁 Project Structure

```
.
├── public/                 # Static public assets
├── src/                    # Source code
│   ├── assets/             # Images and media
│   ├── components/         # Reusable React components
│   ├── App.tsx             # Root component
│   └── main.tsx            # Entry point
├── vite.config.ts          # Vite configuration
├── package.json            # NPM scripts and dependencies
├── tsconfig.json           # TypeScript config
└── .github/workflows/      # GitHub Actions workflows
```

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙋‍♂️ Author

Built by [Melvin Salazar](https://github.com/msalazar) — feel free to reach out with questions or improvements!

