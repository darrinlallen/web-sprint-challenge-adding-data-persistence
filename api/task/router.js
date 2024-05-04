// build your `/api/tasks` router here
// build your `/api/projects` router here
const express = require('express')
const Task = require('./model')


const router = express.Router()

router.get('/api/tasks',(req, res, next) => {
    Task.getTasks()
    .then(task => {
      res.json(task)
    })
    .catch(next)
})


// Middleware function
function checkStuff(req, res, next) {
  const { id, desc, notes, comp, pid } = req.body;
  if (id) {
    next(); // Proceed to the next middleware or route handler
  } else {
    // Send a 404 error response if 'desc' or 'id' is missing
    next({ status: 404, message: 'desc and id are required' });
  }
}

  router.post('/api/tasks',  async (req, res, next) => {
    try {
      // Create a new task
      const newTsk = await Task.createTask(req.body);
      // Send a JSON response with the newly created task and set the HTTP status code to 201 (Created)
      res.json(newTsk);
    } catch (error) {
      // Pass the error to the error handling middleware
      next(error);
    }
  });

module.exports = router;