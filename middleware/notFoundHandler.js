const notFoundHandler = (req, res, next) => {
  res.status(404);
  next(res.json({ message: "Not Found" }));
};

export default notFoundHandler;
