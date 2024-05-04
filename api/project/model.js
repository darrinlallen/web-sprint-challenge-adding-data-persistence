const db = require('../../data/dbConfig.js');

async function getProjects() {
  const projects = await db.select(
    db.raw(`CASE 
      WHEN project_completed IS NULL THEN false 
      WHEN project_completed = 0 THEN false 
      WHEN project_completed = 1 THEN true 
    END AS 'project_completed'`),
    'project_description',
    'project_name'
  )
    .from('projects');
  return projects.map(project => ({
    ...project,
    project_completed: project.project_completed === 1 ? true : false
  }));
}

async function insertProjects(pi) {
  const projects = await db.select(
    db.raw(`CASE 
      WHEN project_completed IS NULL THEN false 
      WHEN project_completed = 0 THEN false 
      WHEN project_completed = 1 THEN true 
    END AS 'project_completed'`),
    'project_description',
    'project_name'
  )
    .from('projects')
    .where('project_id', pi);
  return projects.map(project => ({
    ...project,
    project_completed: project.project_completed === 1 ? true : false
  }));
}
async function createProj(proj) {
  const [project_id] = await db('projects')
    .insert(proj);
  const [createdProject] = await insertProjects(project_id);
  return createdProject;
}


module.exports = {
  getProjects,
  createProj
};
