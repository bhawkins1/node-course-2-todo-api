// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect to MongoDB server');
  } else
  console.log('Connected to MongoDB server');

// db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) =>{
//   console.log(result);

  // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) =>{
  //   console.log(result);

    // db.collection('Todos').findOneAndDelete({completed: false }).then((result) =>{
    //   console.log(result);
    //
    // db.collection('Users').deleteMany({name: 'Ben' }).then((result) =>{
    //   console.log(result);



   db.collection('Users').findOneAndDelete({_id: new ObjectID ('593e5d8a9483650d28a62d31')}).then((results) => {
     console.log(JSON.stringify(results, undefined, 2));
});

//   db.close();
});
