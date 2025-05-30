# Antigo
# FROM node:20-alpine AS base

# WORKDIR /app

# COPY package*.json .
# COPY . .

# RUN npm ci
# RUN npm run build

# EXPOSE 3000

# CMD ["npm", "run", "start", "--", "-H", "0.0.0.0"]




# Novo
# Etapa de build
FROM node:18 AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa de produção
FROM node:18 AS runner
WORKDIR /app

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000

ENV NODE_ENV=development

CMD ["npm", "run", "dev"]
