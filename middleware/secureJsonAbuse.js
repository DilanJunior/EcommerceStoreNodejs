import rateLimit from "express-rate-limit";

export const jsonRateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, 
  max: 100, 
  message: {
    message: "Demasiadas solicitudes de esta IP, inténtalo de nuevo más tarde.",
    status: 429,
  },
});
