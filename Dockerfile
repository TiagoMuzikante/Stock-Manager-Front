FROM node:20-alpine AS base

WORKDIR /app

COPY package*.json .
COPY . .

RUN npm ci
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start", "--", "-H", "0.0.0.0"]