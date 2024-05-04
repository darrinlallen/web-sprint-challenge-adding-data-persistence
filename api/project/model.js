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


function insertProjects() {
  return db.select('project_id',
  'project_name',
  'project_description',
    db.raw(`CASE 
      WHEN project_completed IS NULL THEN false 
      WHEN project_completed = 0 THEN false 
      WHEN project_completed = 1 THEN true 
    END AS 'project_completed'`)
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

function createProj(id, name, desc, comp) {
  const [project_id] = db('projects').insert({id, name, desc, comp}); // Insert the project into the database and retrieve the project ID
return project_id// Retrieve the newly created project using its ID
}


module.exports = {
    getProjects,
    createProj
}