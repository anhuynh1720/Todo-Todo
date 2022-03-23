const { ObjectId } = require('mongodb');
const {db} =  require('../../models/db')

exports.listAll =  async function(){
    const todos = await db().collection('todos').find().toArray();
    // return [{id:1, name:"Learn Angular", completed: false}];
    return todos;
}
// insert
exports.insertOne = async function(req, res){
    // const insertOne = await db().collection('todos').insertOne(req.params.idTodo, req.body);
    const insertOne =  await db().collection('todos').insertOne({idTodo: 1, name:'learnJs', isCompleted:'false'})
    return insertOne;
}


//update
exports.updateOne = async function(req, res){
    var newValues = {$set: {idTodo: 2, name:'Back to school', isCompleted:'true'}}
    const _id = await db().collection('todos').updateOne({idTodo: 1}, newValues)
    return _id;
}



exports.deleteOne = async function(req, res) {
    const deleteOne = await db().collection('todos').deleteOne({idTodo: 2})
    return deleteOne;
}
// delete
