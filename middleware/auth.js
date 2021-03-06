const jwt = require('jsonwebtoken');
require('dotenv').config();

function auth(req, res, next) {
  const token = req.header('x-auth-token');

  // check for token
  if (!token)
    return res.status(401).json({ msg: 'No Token, authorization denied' });

  try {
    //   Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    //   Add user from payload
    req.user = decoded;
    next();
  } catch (e) {
    res.status(400).json({ msg: 'Token is not valid' });
  }
}

module.exports = auth;
