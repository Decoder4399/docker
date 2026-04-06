FROM golang:1.20 AS builder

WORKDIR /app

COPY go.mod ./
RUN go mod download

COPY . .

RUN go build -o app

FROM alpine:latest

WORKDIR /app
COPY --from=builder /app/app .

CMD ["./app"]
