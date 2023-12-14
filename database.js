const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const userCollection = db.collection('user');
const recipes = db.collection('recipe');
const sharedRecipes = db.collection('recipe');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
})().catch((ex) => {
  console.log(`Unable to connect to database with ${url} because ${ex.message}`);
  process.exit(1);
});

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function createUser(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await userCollection.insertOne(user);

  return user;
}


async function addRecipe(recipe) {
  const result = await recipes.insertOne(recipe);
  return result;
}

async function getRecipes() {
  const result = await recipes.find();
  const cursor = recipes.find();
  return cursor.toArray();
}

async function deleteRecipe(url) {
  console.log("recipe is being deleted");
  console.log(url);
  console.log(recipes.find({linkURL: url}).toArray);
  const result = await recipes.deleteOne({linkURL: url});
  return result;
}

async function getShared() {
  const result = await sharedRecipes.find();
  const cursor = sharedRecipes.find();
  return cursor.toArray();
}

async function shareRecipe(recipe) {
  console.log("recipe is being shared");
  const result = await sharedRecipes.insertOne(recipe);
  const cursor = sharedRecipes.find();
  return cursor.toArray();
}

async function deleteShared(url) {
  console.log("recipe is being deleted");
  const result = await sharedRecipes.deleteOne({linkURL: url});
  return result;
}

module.exports = {  addRecipe, 
                    getRecipes, 
                    getUser, 
                    getUserByToken, 
                    createUser, 
                    deleteRecipe, 
                    getShared, 
                    shareRecipe, 
                    deleteShared 
                  };

