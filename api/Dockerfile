FROM oven/bun:1.3

WORKDIR /app

COPY package.json ./
RUN bun install

COPY . .
EXPOSE 3333

CMD ["bun", "dev"]