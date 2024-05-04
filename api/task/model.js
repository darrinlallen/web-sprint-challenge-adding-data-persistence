const db = require('../../data/dbConfig.js');

async function getTasks() {
  const tasks = await db('tasks')
    .join('projects', 'projects.project_id', 'tasks.project_id')
    .select(
      'projects.project_name',
      'projects.project_description',
      'tasks.task_notes',
      'tasks.task_description',
      'tasks.task_completed'
    );
  return tasks.map(task => ({
    ...task,
    task_completed: task.task_completed === 1 ? true : false
  }));
}
async function insertTasks(id) {
  const tasks = await db('tasks')
    .join('projects', 'projects.project_id', 'tasks.project_id')
    .select(
      'projects.project_name',
      'projects.project_description',
      'tasks.task_notes',
      'tasks.task_description',
      'tasks.task_completed'
    ).where('task_id', id);
  return tasks.map(task => ({
    ...task,
    task_completed: task.task_completed === 1 ? true : false
  }));
}


async function createTask(task) {
  const [project_id] = await db('tasks').insert(task);
  const [createdTask] = await insertTasks(project_id);

  return createdTask;
}

module.exports = {
  getTasks,
  createTask
};
