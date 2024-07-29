const errorMiddleware = (err, req, res, next) => {
  statusCode = err.statusCode || 500;

  const response = {
    success: false,
    message: err.message || "Internal Server Error",
  };

  console.error(`Error: ${err.message}`);
  console.error(err.stack);

  // Enviar la respuesta al cliente
  res.status(statusCode).json(response);
};
export default errorMiddleware;