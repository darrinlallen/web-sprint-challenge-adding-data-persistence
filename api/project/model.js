// build your `Project` model here

const { json } = require('express');
const db = require('../../data/dbConfig.js');

const getProjects = () =>  {
  return db('projects').select('project_name', 'project_description', 'project_completed');
}

const  createProj = async (pr) => {
const  [project_id] =  await db('projects').insert(pr);
return getProjects()
}

module.exports = {
    getProjects,
    createProj
}