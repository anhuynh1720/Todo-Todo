const express = require('express');
const router = express.Router();
const todosController =  require('./todosController')
/* GET home page. */
router.get('/', todosController.listAll);
// router.put('/id/completed', todosService.setComplete);


module.exports = router;
