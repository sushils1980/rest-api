const {ObjectID} = require("mongodb");

const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");
const {User} = require("./../server/models/user");

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove({_id:'5a855faab15b8f16500966ca'}).then((doc) => {
//   console.log(doc);
// });

// Todo.findByIdAndRemove('5a855faab15b8f16500966ca').then((doc) => {
//   console.log(doc);
// });