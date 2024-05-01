// build your `/api/resources` router here
const express = require('express')
const Resource = require('./model')


const router = express.Router()

router.get('/api/resources', (req, res, next) => {
    Resource.getResources()
    .then(resource => {
      res.json(resource)
    })
    .catch(next)
})



router.post('/api/resources', (req, res, next) => {
  Resource.create(req.body)
    .then(newResource => {
      res.status(201).json(newResource)
    })
    .catch(next)
})

module.exports = router