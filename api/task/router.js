// build your `/api/tasks` router here
// build your `/api/projects` router here
const express = require('express')
const Task = require('./model')
const { checkStuff } = require('./tmiddleware')


const router = express.Router()

router.get('/api/tasks',(req, res, next) => {
    Task.getTasks()
    .then(task => {
      res.json(task)
    })
    .catch(next)
})


router.post('/api/tasks', checkStuff, (req, res, next) => {
  Task.createTask(req.body)
    .then(newTsk => {
      res.json(newTsk)
    })
    .catch(next)
})

module.exports = router