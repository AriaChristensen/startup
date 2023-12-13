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

// Add to cart
apiRouter.post('/cart', (req, res) => {
  cart = updateCart(req.body, cart);
  res.send(cart);
});

// Remove From cart
apiRouter.delete('/cart', (req, res) => {
  cart = removeCart(req.body, cart);
  res.send(cart);
});

// Get Cart
apiRouter.get('/cart',(req, res) => {
    res.send(cart);
})

apiRouter.post('/recipe', async (req, res) => {
    console.log("adding recipe ...");
    //DB.addRecipe(req.body);
    //const all = await DB.getRecipes();
    //res.send(all);
});


// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// updateCart adds a new ingredient to the cart
let cart = [];
function updateCart(newItem, cart) {
  let found = false;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i] == newItem) {
      found = true;
      break;
    }
  }

  if (!found) {
    cart.push(newItem);
  }

  return cart;
}

function removeCart(newItem, cart) {
    cart.delete(newItem);  
    return cart;
}
