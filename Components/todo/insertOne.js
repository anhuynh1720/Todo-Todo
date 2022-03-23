const express = require('express');
const insertRouter = express.Router();
const todosController =  require('./todosController')

insertRouter.put('/', todosController.insertOne);

module.exports = insertRouter;
