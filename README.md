# Cosmos — Yassine Yousfi's portfolio

Next.js portfolio using the design and React components from [availability-check](https://github.com/yassinecodes201/availability-check): animated starfield, aurora hero, glass panels, project cards, experience timeline, and responsive navigation.

## Development

Use Node.js 24 (see .nvmrc).

```sh
npm ci
npm run dev
```

Run `npm run typecheck` and `npm run build` to validate, then `npm start` to serve the production build.

## Contact form

Copy .env.example to .env.local and configure EMAIL and PASSWORD with the Gmail account and app password used for delivery. The new form posts to the existing /api/contact endpoint and reports success only after the server accepts the message. Failed submissions retain their input.

## Design integration

The original TanStack entry point is adapted to Next.js Pages Router. Tailwind CSS 4 keeps the source design tokens and styling intact. Cosmos's local portrait and existing contact/social details replace source placeholders. Project thumbnails are bundled locally; projects without a published URL link to Contact.
