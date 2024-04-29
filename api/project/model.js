// build your `Project` model here
const db = require('../../data/dbConfig.js');

const getProjects = () =>  {
  return db('projects');
}

module.exports = {
    getProjects
};