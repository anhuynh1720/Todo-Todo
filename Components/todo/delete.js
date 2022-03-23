const express = require('express');
const deleteRouter = express.Router();
const todosController =  require('./todosController')

deleteRouter.delete('/', todosController.deleteOne);

module.exports = deleteRouter;
