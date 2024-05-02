// build your `Project` model here
const db = require('../../data/dbConfig.js');

const getProjects = () =>  {
  return db('projects').select('project_name', 'project_description', 'project_completed');
}

const  createProj = async (pr) => {
  const [project_id] =  await db('projects').insert(pr);
  return getProjects().where("project_id", project_id).first();
}

module.exports = {
    getProjects,
    createProj
}