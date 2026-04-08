# 🚀 DOCKER MULTI-STACK CHEAT SHEET (DEVOPS NOTES)

---

# 🧠 UNIVERSAL DOCKER LOGIC

Every Dockerfile has 4 steps:

1. Base Image
2. Dependency Install
3. Build Step (if required)
4. Run Command (CMD)

---

# 🧩 1. NODE.JS (Express)

## Base Image

FROM node:18-alpine

## Steps

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .

## Run

CMD ["npm", "start"]

## Notes

* No build required
* Default ports: 3000 / 5000

---

# 🧩 2. PYTHON (Flask / FastAPI)

## Base Image

FROM python:3.10-slim

## Steps

WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .

## Run

### Flask

CMD ["python", "app.py"]

### FastAPI

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]

## Notes

* FastAPI requires uvicorn
* No build step

---

# 🧩 3. JAVA (Spring Boot)

## Base Image

FROM maven:3.9.6-eclipse-temurin-17

## Steps

WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

## Run

CMD ["java", "-jar", "target/app.jar"]

## Notes

* Build step required
* JAR file must match name

---

# 🧩 4. GO (Golang)

## Base Image

FROM golang:1.21

## Steps

WORKDIR /app
COPY . .
RUN go build -o app main.go

## Run

CMD ["./app"]

## Notes

* Compiled language
* Binary generated

---

# 🧩 5. PHP (Apache)

## Base Image

FROM php:8.2-apache

## Steps

WORKDIR /var/www/html
COPY . .

## MySQL Support

RUN docker-php-ext-install mysqli

## Run

(No CMD needed — Apache auto runs)

## Notes

* Default port: 80

---

# 🧩 6. REACT (Frontend)

## Base Image (Build)

FROM node:18

## Steps

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

## Serve (NGINX)

FROM nginx:alpine
COPY build /usr/share/nginx/html

## Notes

* Build required
* Static output

---

# 🧩 7. STATIC HTML

## Base Image

FROM nginx:alpine

## Steps

COPY index.html /usr/share/nginx/html/index.html

## Notes

* Simplest Docker setup

---

# 🧩 8. .NET CORE

## Base Image

FROM mcr.microsoft.com/dotnet/sdk:7.0

## Steps

WORKDIR /app
COPY . .
RUN dotnet build

## Run

CMD ["dotnet", "run"]

## Notes

* Build required

---

# 🧩 9. DATABASE SERVICES (NO DOCKERFILE)

## MongoDB

image: mongo

## MySQL

image: mysql:8
environment:
MYSQL_ROOT_PASSWORD: root

## Redis

image: redis

---

# 🔥 GOLDEN RULES

## Rule 1 — Service Name = Hostname

mongodb://mongo:27017
redis://redis:6379

---

## Rule 2 — COPY Optimization

COPY package.json .
RUN npm install
COPY . .

---

## Rule 3 — EXPOSE vs PORTS

EXPOSE → internal
ports → external

---

## Rule 4 — Build vs No Build

Node → ❌
Python → ❌
Java → ✅
Go → ✅
React → ✅
.NET → ✅

---

# 💪 FINAL SUMMARY

Node → node → npm start
Python → python → python / uvicorn
Java → maven → java -jar
Go → golang → ./binary
PHP → php-apache → auto
React → node/nginx → nginx
.NET → dotnet → dotnet run

---

# 🚀 PRACTICE FLOW

1. Run project locally
2. Write Dockerfile
3. Write docker-compose
4. Debug errors

---

# 😎 GOAL

Become:

* Multi-stack Docker expert
* Confident in debugging
* Ready for real DevOps work

---
