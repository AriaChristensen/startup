const express = require('express');
const app = express();
const DB = require('./database.js');

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// add Recipe
apiRouter.post('/recipe', async (req, res) => {
    console.log("adding recipe ...");
    updateRecipes(req.body, recipes);
    res.send(recipes);
    //DB.addRecipe(req.body);
    //const all = await DB.getRecipes();
    //res.send(all);

});

// get Recipes
apiRouter.get('/recipe', async (req, res) => {
    console.log("sending recipes ...")
    res.send(recipes);
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


let recipes = [];
function updateRecipes(newItem, data) {
  let found = false;
  for (let i = 0; i < data.length; i++) {
    if (data[i] == newItem) {
      found = true;
      break;
    }
  }

  if (!found) {
    data.push(newItem);
  }

  return data;
}


