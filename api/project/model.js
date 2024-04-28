// build your `Project` model here
const db = require('../../data/dbConfig.js');

function getProjects() {
  return db('projects');
}

module.exports = {
    getProjects
};