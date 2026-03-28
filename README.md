# Elliot Cann — Portfolio

Personal portfolio website built with Next.js 15, Tailwind CSS v4, and TypeScript.

## Tech Stack

- **Framework** — Next.js 15 (App Router, React Server Components)
- **Styling** — Tailwind CSS v4 with custom design tokens
- **Animations** — Framer Motion (`whileInView`) + Typed.js
- **Icons** — react-icons (Bootstrap Icons + Simple Icons)
- **Forms** — react-hook-form + Zod validation
- **Email** — Nodemailer via Next.js API route
- **Fonts** — Roboto (body) + Poppins (headings) via Google Fonts

## Project Structure

```
app/
├── api/contact/route.ts     # Contact form API (Nodemailer + Zod + rate limiting)
├── components/
│   ├── layout/              # Sidebar, Footer, ScrollTop
│   ├── sections/            # Hero, About, Portfolio, Skills, Resume, Contact
│   └── ui/                  # AnimatedSection, TypedText, PortfolioCard, ContactForm, SectionTitle
├── data/                    # Typed content: nav, skills, portfolio, resume
├── robots.ts
└── sitemap.ts
public/
├── images/                  # Hero bg, profile photo, portfolio screenshots, favicons
└── files/                   # Downloadable CV
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Create a `.env.local` file in the project root (never commit this):

```env
SMTP_HOST=mail.elliotcann.com
SMTP_PORT=465
SMTP_USER=me@elliotcann.com
SMTP_PASS=your-password-here
SMTP_FROM=me@elliotcann.com
SMTP_TO=me@elliotcann.com
```

These are used by `/api/contact` to send form submissions via SMTPS.

## Deployment

Deploy to Vercel with zero config — connect the repo, add the six env vars above in the Vercel dashboard, and deploy.

```bash
npm run build   # verify clean build locally first
```
