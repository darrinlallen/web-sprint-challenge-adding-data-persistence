// build your `/api/resources` router here
const express = require('express')
const Resource = require('./model')


const router = express.Router()

router.get('/', (req, res, next) => {
    Resource.getResources()
    .then(resource => {
      res.json(resource)
    })
    .catch(next)
})



router.post('/api/resources', (req, res, next) => {
  User.add(req.body)
    .then(newResource => {
      res.status(201).json(newResource)
    })
    .catch(next)
})

module.exports = router