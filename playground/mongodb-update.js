// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

//   db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectID('593eaceabafee52242e0788c')
// }, {
//   $set: {
//     completed: true
//   }
// }, {
//   returnOriginal: false
// }).then((result) => {
//   console.log(result)
// });

db.collection('Users').findOneAndUpdate({
_id: new ObjectID('593e5ddf8e8cca289061e0cf')
}, {
$set: {
  name: 'Ben'
},
  $inc: {
    age: 1
}
}, {
returnOriginal: false
}).then((result) => {
console.log(result)
});


//   db.close();
});
