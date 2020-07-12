const express = require('express')
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const path = require('path')
const app = express()
const port = 3000
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/public', express.static(path.join(__dirname, 'public')))


// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'myposts';
 
// Use connect method to connect to the server
const getDBConnection = function(callback){
    MongoClient.connect(url, function(err, client) {
        console.log("Connected successfully to server");
        const db = client.db(dbName);
        callback(db);
      });
}


const insertDocuments = function(db, insertData, callback) {
    // Get the documents collection
    const collection = db.collection('posts');
    // Insert some documents
    collection.insertOne(insertData, function(err, result) {
      callback(result);
    });
  }

  const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('posts');
    // Find some documents
    collection.find({}).toArray(function(err, docs) {
      callback(docs);
    });
  }

app.get('/posts', (req, res) => {
    getDBConnection(function(db){
        findDocuments(db, function(data){
            return res.send(data)
        })
    })
})

app.post('/post', (req, res) => {
    console.log(req.body)
    var insertData = req.body;
    insertData['createdAt'] = new Date();
    getDBConnection(function(db){
        insertDocuments(db, insertData ,function(data){
            return res.send(data)
        })
    })
})

app.get('/page1', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/page1/index.html'));
})

app.get('/page2', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/page2/index.html'));
})
app.get('/page3', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/page3/index.html'));
})


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))