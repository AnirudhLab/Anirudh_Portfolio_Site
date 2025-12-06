# ---- Build stage ----
FROM node:18-slim AS builder
WORKDIR /app
ENV NODE_ENV=production

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# ---- Runtime stage ----
FROM node:18-slim AS runner
WORKDIR /app
ENV NODE_ENV=production \
    PORT=3000

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/next.config.ts ./next.config.ts
COPY --from=builder /app/server.js ./server.js

RUN npm ci --omit=dev

EXPOSE 3000
CMD ["node", "server.js"]

