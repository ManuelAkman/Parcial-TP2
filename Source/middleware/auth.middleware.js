import jwt from 'jsonwebtoken';
import { CONFIG } from '../configuration/configuration.js';

export const validateTokenMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.json({
      status: 401,
      OK: false,
      message: 'No se proporciono un token de autorizacion',
    });
    return;
  }

  const token = authHeader.split(' ')[1];

  console.log(CONFIG.SECRECT_KEY);

  try {
    const decoded = jwt.verify(token, CONFIG.SECRECT_KEY);

    req.user = decoded; 

    next();
  } catch (error) {
    res.json({
      status: 401,
      OK: false,
      message: 'Token invalido o expirado',
    });
    return;
  }
};
