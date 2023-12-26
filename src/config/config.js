const {
  MERCADO_PAGO_TOKEN,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  URL_FRONT,
  URL_BACK,
  DB_DATABASE,
  PORT,
} = process.env;

module.exports = {
  URL: {
    URL_FRONT,
    URL_BACK,
  },
  DB: {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_DATABASE,
  },
  PORT,
  TOKENS: { MERCADO_PAGO_TOKEN },
};
