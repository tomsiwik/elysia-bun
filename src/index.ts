import { Elysia } from 'elysia'

const welcomeStrings = [
  `Hello Elysia from Bun ${process.versions.bun}!`,
  "To learn more about Elysia + Bun on Vercel, visit https://vercel.com/docs/frameworks/backend/elysia",
];

const app = new Elysia()
    .get('/', welcomeStrings.join("\n\n"))

export default app;
