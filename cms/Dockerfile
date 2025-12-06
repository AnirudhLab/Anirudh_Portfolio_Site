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
    HOST=0.0.0.0 \
    PORT=1337

COPY --from=builder /app ./
RUN npm ci --omit=dev

EXPOSE 1337
CMD ["npm", "run", "start"]

