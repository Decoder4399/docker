#stage1

FROM node:18 AS builder

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

#stage2

FROM nginx:latest

COPY --from=builder /app/build /usr/share/nginx/html 
