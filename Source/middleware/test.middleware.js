export const testMiddleware = (req, res, next) => {
  console.log('request body', req.body);

    if (req.body.validacion == 'creditCard') {
    console.log('Validacion correcta');
    next();
    return;
  }

  res.json({
    status: 400,
    OK: false,
    message: 'Falta la validacion de la tarjeta de credito',
  });
};
