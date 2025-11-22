import express from 'express';
import { loginAdmin } from '../controllers/admin.login.controller.js';

const router = express.Router();

router.post('/user/login', loginAdmin);

export default router;
