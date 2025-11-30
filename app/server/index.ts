import { Elysia, t } from 'elysia'

const welcomeStrings = [
  `Hello Elysia from Bun ${process.versions.bun || 'local-version'} API Function!`,
  "To learn more about Elysia + Bun on Vercel, visit https://vercel.com/docs/frameworks/backend/elysia",
];

const app = new Elysia({ prefix: '/api' })
    .get('/', welcomeStrings.join("\n\n"))
    .post('/', ({ body }) => body, {
        body: t.Object({
            name: t.String()
        })
    })

export default app;