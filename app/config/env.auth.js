const baseUrl = process.env.BASE_URL;
const clientId = process.env.CLIENT_ID;
const issuerBaseUrl = process.env.ISSUER_BASE_URL;
const authSecret = process.env.AUTH_SECRET;

if (!baseUrl) {
  throw new Error(
    ".env is missing the definition of an BASE_URL environmental variable",
  );
}

if (!clientId) {
  throw new Error(
    ".env is missing the definition of an CLIENT_ID environmental variable",
  );
}

if (!issuerBaseUrl) {
  throw new Error(
    ".env is missing the definition of an ISSUER_BASE_URL environmental variable",
  );
}

if (!authSecret) {
  throw new Error(
    ".env is missing the definition of an AUTH_SECRET environmental variable",
  );
}

module.exports = {
  authSecret,
  baseUrl,
  clientId,
  issuerBaseUrl
}