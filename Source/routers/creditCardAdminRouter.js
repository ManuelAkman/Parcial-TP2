import express from 'express';
import { CreditCardController } from '../controllers/creditCard.controller.js';
import { testMiddleware } from '../middleware/test.middleware.js';
import { apikeyAuth } from '../authentification/auth.apikey.js';

const { getAllData } = CreditCardController;
const creditCardAdminRouter = express.Router();

creditCardAdminRouter
  .get('/api/admin/creditCard', testMiddleware, getAllData)
  .get('/api/apikey/creditCard', apikeyAuth, getAllData)

export default creditCardAdminRouter;
