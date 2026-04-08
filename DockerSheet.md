# 🚀 Docker Multi-Stack Cheat Sheet (DevOps Notes)

A quick reference for containerizing different tech stacks using Docker.

---

## 🧠 Universal Docker Workflow

Every Dockerfile follows these steps:

1. **Base Image**
2. **Install Dependencies**
3. **Build (if required)**
4. **Run Command (CMD)**

---

## 🧩 1. Node.js (Express)

### Base Image

```dockerfile
FROM node:18-alpine
```

### Steps

```dockerfile
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
```

### Run

```dockerfile
CMD ["npm", "start"]
```

### Notes

* No build required
* Common ports: `3000`, `5000`

---

## 🧩 2. Python (Flask / FastAPI)

### Base Image

```dockerfile
FROM python:3.10-slim
```

### Steps

```dockerfile
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
```

### Run

#### Flask

```dockerfile
CMD ["python", "app.py"]
```

#### FastAPI

```dockerfile
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

### Notes

* FastAPI requires `uvicorn`
* No build step

---

## 🧩 3. Java (Spring Boot)

### Base Image

```dockerfile
FROM maven:3.9.6-eclipse-temurin-17
```

### Steps

```dockerfile
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests
```

### Run

```dockerfile
CMD ["java", "-jar", "target/app.jar"]
```

### Notes

* Build required
* Ensure correct JAR name

---

## 🧩 4. Go (Golang)

### Base Image

```dockerfile
FROM golang:1.21
```

### Steps

```dockerfile
WORKDIR /app
COPY . .
RUN go build -o app main.go
```

### Run

```dockerfile
CMD ["./app"]
```

### Notes

* Compiled binary
* Fast and lightweight

---

## 🧩 5. PHP (Apache)

### Base Image

```dockerfile
FROM php:8.2-apache
```

### Steps

```dockerfile
WORKDIR /var/www/html
COPY . .
```

### MySQL Support

```dockerfile
RUN docker-php-ext-install mysqli
```

### Run

* No CMD required (Apache runs automatically)

### Notes

* Default port: `80`

---

## 🧩 6. React (Frontend)

### Build Stage

```dockerfile
FROM node:18

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
```

### Serve with NGINX

```dockerfile
FROM nginx:alpine
COPY build /usr/share/nginx/html
```

### Notes

* Build required
* Outputs static files

---

## 🧩 7. Static HTML

### Base Image

```dockerfile
FROM nginx:alpine
```

### Steps

```dockerfile
COPY index.html /usr/share/nginx/html/index.html
```

### Notes

* Simplest setup

---

## 🧩 8. .NET Core

### Base Image

```dockerfile
FROM mcr.microsoft.com/dotnet/sdk:7.0
```

### Steps

```dockerfile
WORKDIR /app
COPY . .
RUN dotnet build
```

### Run

```dockerfile
CMD ["dotnet", "run"]
```

### Notes

* Build required

---

## 🧩 9. Database Services (No Dockerfile Needed)

### MongoDB

```yaml
image: mongo
```

### MySQL

```yaml
image: mysql:8
environment:
  MYSQL_ROOT_PASSWORD: root
```

### Redis

```yaml
image: redis
```

---

## 🔥 Golden Rules

### 1. Service Name = Hostname

```bash
mongodb://mongo:27017
redis://redis:6379
```

---

### 2. Optimize COPY Layers

```dockerfile
COPY package.json .
RUN npm install
COPY . .
```

---

### 3. EXPOSE vs PORTS

| Concept | Meaning                 |
| ------- | ----------------------- |
| EXPOSE  | Internal container port |
| ports   | External host mapping   |

---

### 4. Build Requirements

| Stack  | Build Required |
| ------ | -------------- |
| Node   | ❌              |
| Python | ❌              |
| Java   | ✅              |
| Go     | ✅              |
| React  | ✅              |
| .NET   | ✅              |

---

## 💪 Summary

| Stack  | Base Image | Run Command      |
| ------ | ---------- | ---------------- |
| Node   | node       | npm start        |
| Python | python     | python / uvicorn |
| Java   | maven      | java -jar        |
| Go     | golang     | ./binary         |
| PHP    | php-apache | auto             |
| React  | node/nginx | nginx            |
| .NET   | dotnet     | dotnet run       |

---

## 🚀 Practice Workflow

1. Run project locally
2. Write Dockerfile
3. Add docker-compose
4. Debug errors

---

## 🎯 Goal

* Become multi-stack Docker expert
* Master debugging
* Build production-ready setups

---
