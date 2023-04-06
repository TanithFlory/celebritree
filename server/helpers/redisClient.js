import Redis from "ioredis";

const redis = new Redis({
  port: process.env.REDIS_PORT,
  host: process.env.REDIS_HOST,
  password: process.env.REDIS_PASS,
  db: 0,
});

export default redis;
