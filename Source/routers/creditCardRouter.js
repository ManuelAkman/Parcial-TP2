import express from 'express';
import { CreditCardController } from '../controllers/creditCard.controller.js';
import { apikeyAuth } from '../authentification/auth.apikey.js';

const creditCardRouter = express.Router();
const { createCreditCard, getByEmail, deleteCreditCard, updateCreditCard } = CreditCardController;

creditCardRouter
  .get('/api/creditCard/:email', apikeyAuth, getByEmail)
  .post('/api/creditCard',apikeyAuth, createCreditCard)
  .delete('/api/creditCard/:email', apikeyAuth, deleteCreditCard)
  .patch('/api/creditCard/:email', apikeyAuth, updateCreditCard);

export default creditCardRouter;
