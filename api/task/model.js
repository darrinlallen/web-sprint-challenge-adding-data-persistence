// build your `Task` model here
const db = require('../../data/dbConfig.js');

function getTasks() {
  return  db('tasks').join('projects', 'projects.project_id', 'tasks.project_id')
  .select('projects.project_name','projects.project_description', 'tasks.task_notes', 'tasks.task_description', 'tasks.task_completed');

}


 async function createTask(tsk) {
  const [task_id] =  await db('tasks').insert(tsk);
  return getTasks().where({task_id})
}

 

module.exports = {
    getTasks,
    createTask
};