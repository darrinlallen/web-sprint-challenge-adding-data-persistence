// build your `Resource` model here
const db = require('../../data/dbConfig.js');

function getResources() {
  return db('resources');
}

module.exports = {
    getResources
}