
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dbUser:0987654q00@cluster0-vqhin.mongodb.net/admin?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


