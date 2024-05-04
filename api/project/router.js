const express = require('express');
const router = express.Router();
const Project = require('./model');
const { checkName } = require('./pmiddleware');

router.get('/', async (req, res, next) => {
  try {
    const prj = await Project.getProjects();
    res.json(prj);
  } catch (err) {
    next(err);
  }
});

router.post('/',  async (req, res, next) => {
  try {
    const newP = await Project.createProj(req.body);
    res.json(newP);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
