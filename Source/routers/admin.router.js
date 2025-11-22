import express from 'express';
import { loginAdmin } from '../controllers/admin.login.controller.js';
import { apikeyAuth } from '../authentification/auth.apikey.js';

const router = express.Router();

router.post('/user/login', apikeyAuth, loginAdmin);

export default router;
