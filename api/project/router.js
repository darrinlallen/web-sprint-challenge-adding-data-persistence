// build your `/api/projects` router here
const Project = require('./model')
const { checkName } = require('./pmiddleware')

const router = require('express').Router()


router.get('/api/projects', (req, res, next) => {
  Project.getProjects()
  .then(prj=> {
    res.json(prj)
  })
  .catch(next)
})

router.post('/api/projects', checkName, (req, res, next) => {
  Project.createProj(req.body)
    .then(newProject => {
      res.json(newProject)
    })
    .catch(next)
})


module.exports = router