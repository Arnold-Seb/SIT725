const Form = require('../models/Form');

const create = async (payload) => {
  const doc = new Form(payload);
  return doc.save();
};

module.exports = { create };
