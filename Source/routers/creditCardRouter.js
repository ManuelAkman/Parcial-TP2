import express from 'express';
import { CreditCardController } from '../controllers/creditCard.controller.js';

const creditCardRouter = express.Router();
const { createCreditCard, getByEmail, deleteCreditCard, updateCreditCard } = CreditCardController;

creditCardRouter
  .get('/api/creditCard/:email', getByEmail)
  .post('/api/creditCard', createCreditCard)
  .delete('/api/creditCard/:email', deleteCreditCard)
  .patch('/api/creditCard/:email', updateCreditCard);

export default creditCardRouter;
