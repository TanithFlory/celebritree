import rateLimit from "express-rate-limit";

const rateLimiter = (totalRequests, duration) => {
  const limiter = rateLimit({
    windowMs: duration * 60 * 1000,
    max: totalRequests,
    message: "Too many requests from this IP, please try again in 15 minutes",
  });
  return limiter;
};

export default rateLimiter;
