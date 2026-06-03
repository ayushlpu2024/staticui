import { MongoClient } from 'mongodb';

const uri = "mongodb://Vercel-Admin-static-ui-atlas:KjwauSRInufTpVPZ@ac-z0zfgsh-shard-00-00.tzsofcs.mongodb.net:27017,ac-z0zfgsh-shard-00-01.tzsofcs.mongodb.net:27017,ac-z0zfgsh-shard-00-02.tzsofcs.mongodb.net:27017/?ssl=true&replicaSet=atlas-z0zfgsh-shard-0&authSource=admin&retryWrites=true&w=majority";

async function run() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log("Connected successfully to server");
  } catch(e) {
    console.error(e);
  } finally {
    await client.close();
  }
}
run();
