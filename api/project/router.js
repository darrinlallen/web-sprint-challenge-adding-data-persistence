// build your `/api/projects` router here
const express = require('express')
const Project = require('./model')


const router = express.Router()

router.get('/api/project', (req, res, next) => {
    Project.getProjects()
    .then(project => {
      res.json(project)
    })
    .catch(next)
})



router.post('/api/project', (req, res, next) => {
  User.add(req.body)
    .then(newProject => {
      res.status(201).json(newProject)
    })
    .catch(next)
})

module.exports = router