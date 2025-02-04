FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run docker

FROM nginx:alpine

COPY --from=build /app/dist/poke-weakness/ /usr/share/nginx/html

EXPOSE 80