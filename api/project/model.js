const db = require('../../data/dbConfig.js');

function getProjects() {
  return db.select(
    db.raw(`CASE 
      WHEN project_completed IS NULL THEN false 
      WHEN project_completed = 0 THEN false 
      WHEN project_completed = 1 THEN true 
    END AS 'project_completed'`),
    'project_description',
    'project_name'
  )
  .from('projects')
  .then(projects => {
    // Convert null values to false
    return projects.map(project => ({
      ...project,
      project_completed: project.project_completed === 1 ? true : false
    }));
  });
}
async function createProj(proj) {
  const [project_id] = await db('projects')
    .insert(proj);
  const createdProject = await getProjects().where(project_id).first();
  return createdProject;
}


module.exports = {
  getProjects,
  createProj
};
