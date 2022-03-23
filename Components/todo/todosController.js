const { response } = require('../../app');
const todosService =  require('./todosServices');

exports.listAll = async function(request, responne) {
    const todos =  await todosService.listAll();
    responne.json(todos);
};


exports.insertOne = async function(request, responne){
    const todos = await todosService.insertOne();
    responne.json(todos);
}

exports.updateOne = async function(request, response){
    const todos = await todosService.updateOne();
    response.json(todos);
}

exports.deleteOne = async function (request, responne){
    const todos = await todosService.deleteOne();
    responne.json(todos);
}


