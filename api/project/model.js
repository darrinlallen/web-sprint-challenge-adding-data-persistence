// build your `Project` model here

const { json } = require('express');
const db = require('../../data/dbConfig.js');
const knex = require('knex');

const getProjects = () => {
  return db.select(
    'project_name', 
    'project_description', 
    db.raw('CASE WHEN project_completed = 1 THEN true ELSE false END')
  )
  .from('projects');
}


const createProj = async (pr) => {
  const proj_id = await db('projects').insert({pr}); // Insert the project into the database and retrieve the project ID
  return getProjects().where({ id: proj_id }).first(); // Retrieve the newly created project using its ID
}


module.exports = {
    getProjects,
    createProj
}