const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.get('/', taskController.getAllTasks);

router.get('/:id', taskController.getTaskById);

router.post('/', taskController.createTrask);

router.put('/:id', taskController.updateTask);

module.exports = router;