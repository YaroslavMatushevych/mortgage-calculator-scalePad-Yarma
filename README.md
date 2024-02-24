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

Leveraging the best aspects of React and Next.js, this approach combines static rendering, server-side API calls, and client-side user interactions.
Teck Stack opinions: Despite my frequent use of React Hook Form, I've come to feel that omitting this library could simplify the development process for every developer, making it a subject for team discussion. Incorporating linters and pre-commit checks helps maintain clean code and prevent unforeseen issues. Utilizing SCSS modules is an effective strategy for dividing SCSS, reducing the bundle size, and encapsulating styles. Decomposing components not only simplifies component reuse but also enhances the accessibility and organization of utilities, types, mocks, and constants within a project. This structured approach allows developers to easily share and apply common resources across different components, promoting a more efficient and maintainable codebase.
Please feel free to reach out for any clarifications or suggestions you may have.

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
