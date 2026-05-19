# Contributing to Groundwork

First: thank you. Every person who contributes to this project is helping someone somewhere get access to education they couldn't otherwise afford. That matters.

There are two ways to contribute: **code** and **curriculum**. Both are equally important.

---

## Code of Conduct

Be decent. This platform exists for people who've been left out. Don't be the person who makes contributors feel left out too.

---

## Local Development Setup

### Prerequisites

- Node.js 20+
- PostgreSQL (or Docker)
- A Google Gemini API key (free at [aistudio.google.com](https://aistudio.google.com))

### Steps

```bash
# 1. Clone the repo
git clone https://github.com/harleysmodernlife/groundwork
cd groundwork

# 2. Install dependencies
npm install

# 3. Set up environment
cp .env.example .env
# Edit .env — minimum required:
#   DATABASE_URL
#   AUTH_SECRET (run: openssl rand -base64 32)
#   GOOGLE_GENERATIVE_AI_API_KEY
#   ENCRYPTION_KEY (run: openssl rand -base64 32)

# 4. Start the database (Docker)
docker compose up postgres -d

# 5. Run migrations and seed
npx prisma migrate dev
npx prisma db seed

# 6. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Contributing Code

### Getting Started

1. Fork the repo
2. Create a branch: `git checkout -b your-feature-name`
3. Make your changes
4. Run `npx tsc --noEmit` — zero TypeScript errors required
5. Run `npm run lint` — zero lint errors required
6. Submit a pull request

### Code Standards

- **Max 300 lines per file.** Split proactively.
- **Max 50 lines per function.** Break it up.
- No commented-out code
- No console.logs in production paths
- Every API route must check authentication before doing anything else
- Never log or expose API keys, even partially

### What We Need

Check [GitHub Issues](https://github.com/harleysmodernlife/groundwork/issues) for open work. Good first issues are labeled `good first issue`.

Areas where help is especially welcome:
- Accessibility improvements
- Internationalization
- Test coverage
- Mobile responsiveness
- Performance

---

## Contributing Curriculum

You don't need to know how to code to contribute. Writing a lesson is a contribution.

### Curriculum Format

Lessons are written in MDX (Markdown with React components). They live in `/content/[subject]/[course]/`.

A lesson file looks like this:

```mdx
---
title: "What Is a Business?"
description: "Understanding the basic definition and purpose of a business entity."
estimatedMinutes: 15
---

## The Simple Definition

A business is an organization that provides goods or services in exchange for something of value...

## Why It Matters

...
```

### What Makes a Good Lesson

- **Clear and direct.** No textbook voice. Write like you're explaining it to a smart friend.
- **Real examples.** Abstract concepts become real when they're grounded.
- **Short.** Aim for 10–20 minutes of reading. Depth comes from the AI tutor conversation.
- **Honest.** If something is complicated, say so. Don't oversimplify to the point of being wrong.

### Submitting Curriculum

1. Fork the repo
2. Write your lesson in the appropriate `/content/` folder
3. Submit a pull request with `[curriculum]` in the title
4. A maintainer will review for accuracy and clarity

If you're an expert in a field and want to design an entire course, open an issue first so we can coordinate.

---

## Reporting Bugs

Open an issue. Include:
- What you expected to happen
- What actually happened
- Steps to reproduce
- Your browser and OS if it's a UI bug

---

## Questions

Open an issue with the `question` label. No question is too basic.

---

## License

By contributing, you agree that your contributions will be licensed under the AGPL-3.0 license. This keeps the platform free for everyone, forever.
