

export class CreditCard {
 constructor(cardNumber, cardHolder, expirationDate, cvv, email) {
    this.cardNumber = String(cardNumber);
    this.cardHolder = String(cardHolder);
    this.expirationDate = String(expirationDate);
    this.cvv = String(cvv);
    this.email = String(email);
  }
}
