
import { CreditCard } from '../models/CreditCard.model.js';
import { DataBaseRepository } from '../repositories/json.repository.js';

const database = new DataBaseRepository('database/creditCard.db.json');

export const CreditCardController = {
  getAllData: async (req, res) => {
        const creditCards = await database.getAllData();

    const creditCardObjectArray = creditCards.map((card) =>
      new CreditCard(
        card?.cardNumber,
        card?.cardHolder,
        card?.expirationDate,
        card?.cvv,
        card?.email,
      ),
    );

    res.json({
      OK: true,
      message: 'Listado de tarjetas de crédito disponible solo para el admin',
      payload: creditCardObjectArray,
    });
  },
  getByEmail: async (req, res) => {
    const emailParam = req.params.email;
      console.log(`Este es el mail de la tarjeta: ${emailParam}`);

    try {
      const responseData = await database.getByEmail(emailParam);

      res.json({
        status: 200,
        OK: true,
        message: 'Existe la tarjeta de crédito',
        payload: responseData,
      });

      return;
    } catch (error) {
      res.json({
        status: 400,
        OK: false,
        message: `No existe la tarjeta de crédico con el mail: ${emailParam}`,
      });
      return;
    }
  },

  getByEmailBody: async (req, res) => {
    const { email } = req.body;

    try {
      const responseData = await database.getByEmail(email);

      res.json({
        status: 200,
        OK: true,
        message: 'Existe la tarjeta',
        payload: responseData,
      });

      return;
    } catch (error) {
      res.json({
        status: 400,
        OK: false,
        message: `No existe la tarjeta de crédico con el mail: ${emailParam}`,
      });
      return;
    }
  },

  createCreditCard: async (req, res) => {
    console.log(req.body);

    const { cardNumber, cardHolder, expirationDate, cvv, email } = req.body;
    const newCreditCard = new CreditCard(cardNumber, cardHolder, expirationDate, cvv, email);
    const response = await database.createCreditCard(newCreditCard);

    res.json({
      status: 200,
      OK: true,
      message: 'Tarjeta de crédicto creada',
      payload: response,
    });
  },

  deleteCreditCard: async (req, res) => {
    const { email } = req.params;

    try {
      const creditCard = await database.getByEmail(email);

      await database.deleteCreditCard(creditCard);

      res.json({
        status: 200,
        OK: true,
        msg: `La tarjeta de crédito del mail: ${creditCard.email} fue eliminada de la base de datos`,
      });
    } catch (error) {
      res.json({
        status: 400,
        OK: false,
        message: error.message,
      });
      return;
    }
  },

  updateCreditCard: async (req, res) => {
    const { email } = req.params;
    const { cardNumber, cvv } = req.body;
    try {
      const creditCard = await database.getByEmail(email);

      creditCard.cardNumber = cardNumber;
      creditCard.cvv = cvv;

      const { oldDataCreditCard, newDataCreditCard } = await database.updateCreditCard(creditCard);

      res.json({
        status: 200,
        OK: true,
        oldDataCreditCard,
        newDataCreditCard,
      });
    } catch (error) {
      res.json({
        status: 400,
        OK: false,
        message: error.message,
      });
      return;
    }
  },
};
