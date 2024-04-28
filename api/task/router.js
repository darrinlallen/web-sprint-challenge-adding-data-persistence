// build your `/api/tasks` router here
// build your `/api/projects` router here
const express = require('express')
const Task = require('./model')


const router = express.Router()

router.get('/api/tasks', (req, res, next) => {
    Task.getTasks()
    .then(task => {
      res.json(task)
    })
    .catch(next)
})



router.post('/api/tasks', (req, res, next) => {
  User.add(req.body)
    .then(newTask => {
      res.status(201).json(newTask)
    })
    .catch(next)
})

module.exports = router