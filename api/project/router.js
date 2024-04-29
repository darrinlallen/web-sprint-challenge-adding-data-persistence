// build your `/api/projects` router here
const Project = require('./model')

const router = require('express').Router()


router.get('/', async (req, res) => {
    
  try {
    const prj = await Project.getProjects()
        console.log(prj)
        res.status(200).json(prj);
    
  }
  catch(err) {
    console.log(err)
  }  
})




module.exports = router