import jwt from 'jsonwebtoken';

export function authenticateToken(req, res, next) {
  // const authHeader = req.headers['authorization'];
  // const token = authHeader && authHeader.split(' ')[1];

  const token = req.cookies.accessToken;

  if (!token) {
    return res.status(401).json({ error: 'Nincs hozzáférési token' });
  }

  jwt.verify(token, process.env.JWT_ACCESS_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Érvénytelen token' });
    }
    res.user = user;
    next();
  });

}