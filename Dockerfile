FROM node:21-slim as build
WORKDIR /app
COPY . /app
RUN npm install -g bun
RUN bun install && bun run build

FROM nginx:latest
COPY --from=build /app/build /usr/share/nginx/html
