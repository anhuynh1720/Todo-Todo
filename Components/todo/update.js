const express = require('express');
const updateRouter = express.Router();
const todosController =  require('./todosController')

updateRouter.post('/', todosController.updateOne);

module.exports = updateRouter;
