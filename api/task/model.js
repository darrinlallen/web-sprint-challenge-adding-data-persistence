// build your `Task` model here
const db = require('../../data/dbConfig.js');

function getTasks() {
  return db('tasks');
}


async function createTask(tsk) {
  const [task_id]=  await db('tasks').insert(tsk);
  return getTasks().where({task_id}).first();
}
module.exports = {
    getTasks,
    createTask
};