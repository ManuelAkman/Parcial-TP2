import fs from 'fs/promises';
import { CreditCard } from 'C:\Users\dizzy\source\repos\Parcial-TP2\Source\models\creditCard.model.js';

export class DataBaseRepository {
  constructor(path) {
    this.path = path;
  }

  async getAllData() {
    const data = await fs.readFile(this.path, { encoding: 'utf8' });
    return await JSON.parse(data);
  }

  async getByEmail(emailParam) {
    let data = await this.getAllData();

    if (!data) {
      throw new Error('Esta vacio');
    }

    const filteredData = data.filter((creditCard) => creditCard.email === emailParam);

    console.log(filteredData);

    if (!filteredData || filteredData.length === 0)
      throw new Error(`No existe tarjeta de credito con este mail: ${emailParam}`);

    const objetoPlain = filteredData[0];

      const creditCard = new CreditCard(
        objetoPlain.cardNumber,
        objetoPlain.cardHolder,
        objetoPlain.expirationDate,
        objetoPlain.cvv,
        objetoPlain.email,
    );

      return creditCard;
  }

  async createCreditCard(creditCard) {
    let data = await this.getAllData();

    data.push(creditCard);

    await fs.writeFile(this.path, JSON.stringify(data, null, 2));

    return {
      emailCreditCard: creditCard.email,
    };
  }


  async deleteProduct(creditCard) {
    const { email } = creditCard;

    let data = await this.getAllData();

    const filteredData = data.filter((creditCard) => creditCard.email !== email);

    await fs.writeFile(this.path, JSON.stringify(filteredData, null, 2));

    return {
      emailCreditCard: email,
    };
  }

  async updateProduct(creditCard) {
    const { email } = creditCard;

    let data = await this.getAllData();

    const filteredData = data.filter((creditCard) => creditCard.email !== email);
    const oldDataCreditCard = data.filter((creditCard) => creditCard.email === email);

    filteredData.push(creditCard);

    await fs.writeFile(this.path, JSON.stringify(filteredData, null, 2));

    return { oldDataCreditCard, newDataCreditCard: creditCard };
  }
}
