const express = require("express");
const redis = require("redis");

const app = express();

const client = redis.createClient({
  url: "redis://redis:6379"
});

client.connect();

app.get("/", async (req, res) => {
  const cached = await client.get("data");

  if (cached) {
    return res.send("⚡ From Cache: " + cached);
  }

  const data = "Hello from Backend " + new Date();

  await client.set("data", data, { EX: 10 });

  res.send("🔥 Fresh Data: " + data);
});

app.listen(5000, () => console.log("Backend running"));
