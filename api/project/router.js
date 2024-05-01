// build your `/api/projects` router here
const Project = require('./model')

const router = require('express').Router()


router.get('/api/projects', (req, res, next) => {
  Project.getProjects()
  .then(prj=> {
    res.json(prj)
  })
  .catch(next)
})

router.post('/api/projects', (req, res, next) => {
  Project.create(req.body)
    .then(newProject => {
      res.status(201).json(newProject)
    })
    .catch(next)
})


module.exports = router