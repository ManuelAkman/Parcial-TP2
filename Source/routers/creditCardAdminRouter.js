import express from 'express';
import { CreditCardController } from '../controllers/creditCard.controller.js';
import { testMiddleware } from '../middleware/test.middleware.js';
import { apikeyAuth } from '../authentification/auth.apikey.js';
import { validateTokenMiddleware } from '../middleware/auth.middleware.js';

const { getAllData } = CreditCardController;
const creditCardAdminRouter = express.Router();

productAdminRouter
  .get('/api/admin/creditCard', testMiddleware, getAllData)
  .get('/api/apikey/creditCard', apikeyAuth, getAllData)
  .get('/api/jwtoken/creditCard', validateTokenMiddleware, getAllData);
export default creditCardAdminRouter;
