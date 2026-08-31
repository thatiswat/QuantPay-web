# Quantpay Web

The official public-facing website for **Quantpay** — a connected business platform built for Indian businesses.

Quantpay brings everyday business operations into one connected system, helping businesses manage their workflow from billing and inventory to customers and payments.

## Overview

`quantpay-web` is the **marketing and product website** for Quantpay.

It is intentionally separated from the actual business application.

| Platform     | Purpose                                          | Domain            |
| ------------ | ------------------------------------------------ | ----------------- |
| Quantpay Web | Marketing, product information, company presence | `quantpay.in`     |
| Quantpay App | Business application                             | `app.quantpay.in` |

The application is maintained in the separate `quantpay-app` repository.

## Website

**Production:** `https://quantpay.in`

**Application:** `https://app.quantpay.in`

The website's primary conversion points direct users to the Quantpay application.

## What the Website Contains

* Quantpay homepage
* Product overview
* Product experience sections
* Billing/product demonstrations
* Inventory/product demonstrations
* Customer and payment demonstrations
* Enterprise positioning
* Calls to action
* Contact and product navigation
* SEO metadata
* Robots and sitemap configuration

The product components under `components/product` are **marketing presentation components**, not the actual application modules.

## Architecture

```text
                         Quantpay
                            │
              ┌─────────────┴─────────────┐
              │                           │
        quantpay-web                 quantpay-app
              │                           │
        quantpay.in                app.quantpay.in
              │                           │
         Marketing                   Application
              │                           │
       Product website              Dashboard
       Product pages                Billing
       Company presence             Customers
       Enterprise                   Inventory
       Contact                      Invoices
                                    Payments
                                    Expenses
                                    Reports
                                    Settings
```

This separation keeps the public website isolated from business application logic and customer data.

## Tech Stack

* **Next.js 16**
* **React**
* **TypeScript**
* **Tailwind CSS**
* **Space Grotesk**
* **Lucide React**
* **pnpm**
* **Vercel**

## Project Structure

```text
quantpay-web/
│
├── app/
│   ├── (marketing)/
│   │   ├── layout.tsx
│   │   └── product/
│   │       └── page.tsx
│   │
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── robots.ts
│   └── sitemap.ts
│
├── components/
│   ├── marketing/
│   ├── product/
│   └── ui/
│
├── features/
├── hooks/
├── lib/
├── public/
├── services/
├── types/
│
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

## Local Development

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Open:

```text
http://localhost:3000
```

## Production Build

Run:

```bash
pnpm build
```

The current public routes are:

```text
/
 /product
 /robots.txt
 /sitemap.xml
```

## Deployment

The website is deployed through **Vercel**.

```text
GitHub
   │
   ▼
quantpay-web
   │
   ▼
Vercel
   │
   ▼
quantpay.in
```

The application has its own independent deployment:

```text
GitHub
   │
   ▼
quantpay-app
   │
   ▼
Vercel
   │
   ▼
app.quantpay.in
```

## Security

The marketing website is intentionally isolated from the application.

Current baseline protections include:

* HTTPS through Vercel
* HSTS
* `X-Content-Type-Options: nosniff`
* `X-Frame-Options: DENY`
* Strict referrer policy
* Restricted browser permissions
* Environment files excluded from Git
* `node_modules` excluded from Git
* `.next` excluded from Git
* Dependency audit with no known vulnerabilities at the current check
* No application/database credentials in the marketing codebase

Security-sensitive application functionality belongs in `quantpay-app` and the Quantpay backend.

## Design Principles

Quantpay's public website follows a minimal, product-focused visual system:

* Clean white/neutral surfaces
* Quantpay green as the primary accent
* Dark typography
* Space Grotesk typography
* Generous whitespace
* Minimal visual noise
* Product-led presentation
* Clear conversion paths
* Responsive layouts
* Subtle motion and interaction

## Development Principle

`quantpay-web` should remain **marketing-only**.

Do not introduce:

* Business transaction processing
* Customer databases
* Billing logic
* Inventory logic
* Payment processing
* Staff management
* Application authentication
* Business APIs
* Sensitive business data

Those belong to:

```text
quantpay-app
    +
Quantpay API
    +
PostgreSQL
```

## License

Proprietary software.

© Quantpay. All rights reserved.
