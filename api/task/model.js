const db = require('../../data/dbConfig.js');

function getTasks() {
  return db('tasks')
    .join('projects', 'projects.project_id', 'tasks.project_id')
    .select(
      'projects.project_name',
      'projects.project_description',
      'tasks.task_notes',
      'tasks.task_description',
      'tasks.task_completed'
    )
    .then(tasks => {
      // Convert null values to false
      return tasks.map(task => ({
        ...task,
        task_completed: task.task_completed === 1 ? true : false
      }));
    });
}

async function createTask(task) {
  const [task_id] = await db('tasks').insert(task);
  return getTasks().where({ task_id });
}

module.exports = {
  getTasks,
  createTask
};
