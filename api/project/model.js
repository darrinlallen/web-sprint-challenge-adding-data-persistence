// build your `Project` model here

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




function getProjects2(){
  return db('projects');
}
async function createProj(pr) {
  const [project_id] = await db('projects').insert({pr}); // Insert the project into the database and retrieve the project ID
return getProjects()// Retrieve the newly created project using its ID
}


module.exports = {
    getProjects,
    createProj,
    getProjects2
}