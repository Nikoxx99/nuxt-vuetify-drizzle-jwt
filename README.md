# nuxt-vuetify-drizzle-jwt
A boilerplate example of an auth system using JsonWebToken (JOSE) with Nuxt 3, Vuetify, and Drizzle ORM.

## Installation

First install dependencies with bun:
`bun install`
## Configuration

1. Modify `env.example` and put your token and configs.
2. Modify `/server/api/login.post.ts` and put your own info in the function `generateToken`.
3. Modify `/middleware/auth.ts` and do the same with the info to validate the token (issuer and audience).
4. Modify `drizzle.config.ts` and put your database (MySQL) credentials.

## Commands

Use the following commands for database operations:

- `db:generate` to generate a migration.
- `db:migrate` to apply the migration.
- `db:studio` to init Drizzle Studio in the browser.
