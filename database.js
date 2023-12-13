const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const recipes = db.collection('recipe');
const cart = db.collection('ingredient');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

async function addRecipe(recipe) {
  console.log("inserting recipe to database");
  const result = await recipes.insertOne(recipe);
  console.log(recipes.find());
  return result;
}

async function getRecipes() {
  console.log("retrieving recipes from database");
  const result = await recipes.find();
  const cursor = recipes.find();
  return cursor.toArray();
}

async function shared() {
  const query = { shared: 'true' };
  const result = await recipes.find(query);
  return result;
}

module.exports = { addRecipe, getRecipes, shared };

