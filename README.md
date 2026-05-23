# Groundwork

**Free education for everyone. No asterisks.**

Groundwork is an open source, AI-powered education platform where anyone in the world can learn anything, get tested on it, and earn a verified certificate — completely free. No paywalls. No "free trial." No credit card. No catch.

The knowledge belongs to everyone. We built the infrastructure to prove it.

---

## Why This Exists

Higher education costs money. A lot of it. And the people who need it most are usually the ones who can't afford it. Every paywall on a course, a certificate, or a textbook is a door that stays closed for someone who could have changed their life walking through it.

Groundwork tears the door off.

---

## How It Works

1. **Create a free account** — that's it, that's all we ask
2. **Pick a subject** — start with Business & Entrepreneurship, more coming
3. **Learn with an AI tutor** — Socratic, adaptive, patient. Teaches you, doesn't just answer
4. **Complete exercises** — practice inside every lesson
5. **Pass the final assessment** — rigorous. You actually have to know it.
6. **Get your certificate** — free, verified, Open Badges 3.0 standard, verifiable by employers

No subscription. No premium tier. No certificate fee. The whole thing is free.

---

## For Employers

If you're hiring and you want access to our pool of verified graduates, that's where money changes hands — on your side, not the student's. Visit the employer portal to search graduates by skill, location, and certification.

Students never pay. Employers pay to recruit. That's the model.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Database | PostgreSQL + Prisma |
| Auth | Auth.js v5 |
| AI | Vercel AI SDK (provider-agnostic) |
| Styling | Tailwind CSS + shadcn/ui |
| Certificates | Open Badges 3.0 |
| Deployment | Docker Compose |
| License | AGPL-3.0 |

---

## AI — Free Tier and BYOK

Groundwork comes with a free AI tier using Google Gemini Flash (Google's free API). There are daily limits on the free tier — when you hit them, the platform guides you through setting up your own API key (BYOK) from any provider: Google, OpenAI, Anthropic, or local models via Ollama.

With your own key: unlimited AI tutoring, zero cost.

---

## Self-Hosting

Groundwork is fully self-hostable. Run it yourself, for your school, your community, your country.

```bash
git clone https://github.com/harleysmodernlife/groundwork
cd groundwork
cp .env.example .env
# Fill in your .env values
docker compose up -d
```

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full local development setup.

---

## Current Status

The platform is built and the full curriculum is loaded. What exists right now:

- **13 subjects** — Business, Economics, Personal Finance, Law, Technology, Trades, Health, Mathematics, Sciences, History & Civics, Psychology, Language & Writing, Arts & Creative Skills
- **85 courses** — each with a timed, scored final assessment
- **642 lessons** — every lesson has practice exercises
- **Full learning stack** — lesson player, AI tutor panel, exercise system, assessment runner, certificate generation, student dashboard
- **Auth** — signup, login, session management
- **Employer portal** — search graduates, post jobs, verify certificates
- **Self-hostable** — Docker Compose, full setup in one command

What's not done yet: public launch, employer partnerships, mobile apps, internationalization. The platform works. It hasn't been opened to the world yet.

See [ROADMAP.md](ROADMAP.md) for what's next.

---

## Contributing

Groundwork is open source under the AGPL-3.0 license. This means you can use it, fork it, run it — but if you modify it and run it as a service, your changes must stay open source too. That's intentional. This platform cannot be privatized.

We welcome contributions of all kinds:
- Curriculum content (lesson writing, exercises, assessments)
- Code (features, bug fixes, accessibility improvements)
- Translations
- Testing and feedback

See [CONTRIBUTING.md](CONTRIBUTING.md) to get started.

---

## License

AGPL-3.0. See [LICENSE](LICENSE).

The short version: use it freely, but you can't fork it and paywall it. That would rather miss the point.
