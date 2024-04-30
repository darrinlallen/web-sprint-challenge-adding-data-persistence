// build your `Project` model here
const db = require('../../data/dbConfig.js');

const getProjects = () =>  {
  return db('projects');
}

async function create(pr) {
  const [project_id] = await db('projects').insert(pr);
  return getProjects().where({ project_id }).first();
}

module.exports = {
    getProjects,
    create
};