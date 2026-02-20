# Rewardive Website

Marketing website for [Rewardive](https://rewardive.app) — an app that helps you find the best credit card to use for every purchase by tracking offers, coupons, and deals from major Indian banks.

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Static Export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Animations**: GSAP

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install Dependencies

```bash
make install
# or
npm install
```

### Development

```bash
make dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build

```bash
make build
# or
npm run build
```

### Start Production Server

```bash
make start
# or
npm run start
```

### Lint

```bash
make lint
# or
npm run lint
```

## Make Commands

| Command | Description |
|---|---|
| `make install` | Install dependencies |
| `make dev` | Start development server |
| `make build` | Build for production |
| `make start` | Start production server |
| `make lint` | Run ESLint checks |
| `make preview` | Build then start production server |
| `make clean` | Remove `.next` and `node_modules` |
| `make reset` | Clean reinstall from scratch |

## Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/       # React components
│   ├── images/       # Static image assets (logos, banks)
│   └── ui/           # Reusable UI primitives
```

## Deployment

Deployed on [Vercel](https://vercel.com). Push to `main` to trigger a production deploy.
