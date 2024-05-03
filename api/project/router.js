// build your `/api/projects` router here
const Project = require('./model')

const router = require('express').Router()

const { checkName } = require('./pmiddleware')

router.get('/api/projects/', async (req, res, next) => {
  try { const prj = await Project.getProjects()
  
    res.json(prj)
  }
  catch(err)
  {(next(err))
  }
})

router.post('/api/projects', checkName, (req, res, next) => {
 try { const ins = Project.createProj(req.body)
    
    res.status(201).json(ins)
    }
    catch(err) {
      (next)
    }
})


module.exports = router