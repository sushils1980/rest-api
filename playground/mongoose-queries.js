const {ObjectID} = require("mongodb");

const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
const {User} = require("./../server/models/user");

// var id = "5a852ed9e41ff028142fb55d";

// if(!ObjectID.isValid(id)){
//   console.log("Object Id is not valid");
// }

// Todo.find({_id : id}).then((todos) => {
//   console.log('Todos: ',todos);
// });

// Todo.findOne({_id : id}).then((todo) => {
//   console.log('Todo: ', todo);
// });

// Todo.findById(id).then((todo) =>{
//   if(!todo){
//     return console.log('id not found');
//   }
//   console.log('Todo: ', todo);
// }).catch((err) => console.log(err));

var id = "5a84066b801b3b1f7c2b4102";

User.findById(id).then((user) => {
  if(!user){
    return console.log("No user found");
  }

  console.log("User: ", user);
}).catch((err) => console.log(err));