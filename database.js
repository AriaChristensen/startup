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
  const result = await recipes.insertOne(recipe);
  return result;
}

async function addToCart(indredient) {
  const result = await cart.insertOne(ingredient);
  return result;
}

async function removeFromCart(ingredient) {
  const result = await cart.deleteOne(ingredient);
  return result;
}

async function getRecipes(category) {
  const query = { section: category};
  const result = await recipes.find(query);
  return result;
}

async function favorites() {
  const query = { favorite: 'true' };
  const result = await recipes.find(query);
  return result;
}

async function shared() {
  const query = { shared: 'true' };
  const result = await recipes.find(query);
  return result;
}

module.exports = { addRecipe, addToCart, removeFromCart, getRecipes, favorites, shared };

