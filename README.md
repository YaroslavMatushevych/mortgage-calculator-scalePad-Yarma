# Mortgage Calculator - ScalePad - Yaroslav Matushevych

![alt text](<Screenshot 2024-02-23 at 17.14.11.png>)

## Features

This project is 🔋 battery packed with:

- ⚡️ Next.js 14
- ⚛️ React 18
- ✨ TypeScript
- 🃏 Jest — Configured for unit testing
- 📈 Absolute Import and Path Alias — Import components using `@/` prefix
- 📏 ESLint — Find and fix problems in your code, also will **auto sort** your imports
- 💖 Prettier — Format your code consistently
- 🐶 Husky & Lint Staged — Run scripts on your staged files before they are committed
- 🤖 Conventional Commit Lint — Make sure you & your teammates follow conventional commit
- 👷 Github Actions — Lint your code on PR
- 🗺 Site Map — Automatically generate sitemap.xml

## Opinion, tech choices.

Using best sides of react and next, combined static renders, server side api calls and user interection on the client.
Despite I used react-hook-forms every time when I use I feel that working without this library make life easier for every developer, so that's the matter of team discussion. Adding linter, precommit checks helps to keep code clean and avoid unexpected issues.
SCSS modules is a good choice for splitting scss, make bundle smaller, and styles encapsulating.
You can easily use utils, types, mocks, constants and reuse components thanks to the decomposition of components.
Feel free to reach out for any clarifications or suggestions you may have.

## Getting Started

### 1. Install pnpm(optional) if you don't have it

```bash
npm install -g pnpm
```

### 2. Install dependencies

It is encouraged to use **pnpm** so the husky hooks can work properly.

```bash
pnpm install
```

### 3. Run the development server

You can start the server using this command:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `src/pages/index.tsx`.
