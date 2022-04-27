const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require('mongodb');
require("dotenv").config();

const app = express();
const port = process.env.port || 5000;

//!----middle-wire
app.use(express.json());
app.use(cors());

//humanCare
//bZvIbcEAq0YHrbfR



const uri = `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.z2j3m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run(){
  try{
    await client.connect();
    const eventsCollection = client.db("humanCare").collection("events");

    //!------- Show ALL events ---------
    app.get("/events", async(req, res)=>{
      const query = {};
      const cursor = eventsCollection.find(query);
      const events = await cursor.toArray();
      res.send(events);
  })

  }
  finally {
    // await client.close();
  }
}

run().catch(console.dir);

app.get("/", (req, res) => {
    res.send("<center><h1> Human Care Server</h1></center>");
});

app.listen(port, ()=>{
    console.log("listening from port: ", port);
})
