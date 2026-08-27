# Desenvolvimento com hot reload
FROM node:20-alpine AS dev
WORKDIR /app
RUN apk add --no-cache openssl
COPY package.json package-lock.json* ./
RUN npm install
COPY . .
EXPOSE 3000
# Reinstala no start porque node_modules é um volume nomeado, que pode estar defasado.
CMD ["sh", "-c", "npm install && npx prisma generate && npm run dev"]

# Build de produção
FROM node:20-alpine AS build
WORKDIR /app
RUN apk add --no-cache openssl
COPY package.json package-lock.json* ./
RUN npm install
COPY . .
RUN npm run build

# Servidor Next standalone
FROM node:20-alpine AS production
WORKDIR /app
RUN apk add --no-cache openssl
ENV NODE_ENV=production
COPY --from=build /app/public ./public
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
# O engine do Prisma não é rastreado pelo output standalone.
COPY --from=build /app/node_modules/.prisma ./node_modules/.prisma
EXPOSE 3000
CMD ["node", "server.js"]
