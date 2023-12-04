function removeSecret(object) {
  delete object.secret;

  return object;
}

module.exports = removeSecret;
