import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import AuthConfig from '../../config/auth';

export default async (req, res, next) => {
  const headerAuth = req.headers.authorization;

  if (!headerAuth) {
    res.status(401).json({ error: 'Token is not provider.' });
  }

  const [, token] = headerAuth.split(' ');
  // desestruturação

  try {
    const decoded = await promisify(jwt.verify)(token, AuthConfig.secret);

    req.userId = decoded.id;

    return next();
  } catch (error) {
    return res.status(401).json({ error: 'Token is not Valid.' });
  }
  // tratativa de erros
};
