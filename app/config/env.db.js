const mongoUri = process.env.MONGO_URI;

if (!mongoUri) {
  throw new Error(
    ".env is missing the definition of an MONGO_URI environmental variable",
  );
}

module.exports = {
  mongoUri
}