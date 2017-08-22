module.exports = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send({ error: 'You must be logged in to do that.' });
  }

  next();
};

//call next when middleware complete; similar to done()
//passes request on to next bit of middleware
