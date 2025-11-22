import { CONFIG } from '../configuration/configuration.js';

const { DUMMY_USER_ADMIN } = CONFIG;

export const loginAdmin = (req, res) => {
  const { username, password } = req.body;

  if (username !== DUMMY_USER_ADMIN.username || password !== DUMMY_USER_ADMIN.password) {
    res.json({
      status: 401,
      OK: false,
      message: 'Credenciales invalidas',
    });
    return;
  }
 res.json({
    status: 200,
    OK: true,
    message: 'Login exitoso',
  });
};
