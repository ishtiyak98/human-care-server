const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.port || 5000;

//!----middle-wire
app.use(express.json());
app.use(cors());

//humanCare
//bZvIbcEAq0YHrbfR


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://humanCare:<password>@cluster0.z2j3m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});


app.get("/", (req, res) => {
    res.send("<center><h1> Human Care Server</h1></center>");
});

app.listen(port, ()=>{
    console.log("listening from port: ", port);
})
