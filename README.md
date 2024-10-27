## High-level description

The application is all about regional news. It consists of just a few pages:

- Home page `/` that redirects you to the `/[lang]/news` depending on your region preference (last visited region)
- Per-region news feed `/[lang]/news`
- Per-region news item page `/[lang]/news/[id]`

## Stack

- Next 15 as a framework
- RadixUI as UI library
- `next-international` for internationalisation
- `prisma` for content storing
- `zod` for validation

## Getting Started

Before you start the project you need to go through several steps:

```bash
# install node 22
nvm use
# install dependencies
npm ci
# content is stored in sqlite database, run migration first and then seed
npm run db:migrate && npm run db:seed
```

To start the project you should run:

```bash
# in dev mode
npm run dev

# in production mode you need to build the project first
npm run build
# and then start server
npm run start
```

In both (dev and production) cases open [http://localhost:3000](http://localhost:3000) in your browser to see the result.
