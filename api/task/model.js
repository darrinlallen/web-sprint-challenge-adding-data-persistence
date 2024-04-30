// build your `Task` model here
const db = require('../../data/dbConfig.js');

function getTasks() {
  return db('tasks');
}
async function create(tsk) {
  const [task_id] = await db('tasks').insert(tsk);
  return getTasks().where({ task_id }).first();
}
module.exports = {
    getTasks,
    create
};
