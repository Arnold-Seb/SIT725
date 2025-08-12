const Project = require('../models/Project');

const getAll = async () => {
  return Project.find({}).lean();
};

const create = async (payload) => {
  const doc = new Project(payload);
  return doc.save();
};

module.exports = { getAll, create };
