// build your `Task` model here
const db = require('../../data/dbConfig.js');

function getTasks() {
  return db('tasks');
}

module.exports = {
    getTasks
};
