class Page {
    constructor() {
        const userNameEl = document.querySelector('.user-name');
        //console.log(userNameEl); // this is returning null?
       // userNameEl.textContent = this.getUserName();
       var currentRecipes = loadRecipes();
    }

    getUserName() {
        return localStorage.getItem('userName') ?? 'Mystery user';
    }
}

const page = new Page;
//FIXME: fix username to show up ^^

let sel = document.getElementById("ddnList");
//sel.addEventListener("change", showRecipeDdn);
//FIXME: sel is null

const testRecipe = {
    favorite: true,
    recipeName: "French Toast Test",
    picURL: "https://th.bing.com/th?id=OSK.8d6071ecfcb936b04aed13baedb764fc&w=228&h=171&rs=2&qlt=80&o=6&cdv=1&dpr=1.3&pid=16.1",
    linkURL: "https://www.foodnetwork.com/recipes/alton-brown/french-toast-recipe-1942216",
    rating: 4,
    comments: "Great recipe!! Try adding cinnamon and coconut into the egg mixture as well.",
    section: "Breakfast",
    shared: "false"
};

const testRecipe2 = {
    favorite: false,
    recipeName: "Scrambled Eggs",
    picURL: "https://th.bing.com/th?id=OSK.830cc7efe084d301a6bc0d8d0f376452&w=228&h=170&rs=2&qlt=80&o=6&cdv=1&dpr=1.3&pid=16.1",
    linkURL: "https://www.foodnetwork.com/recipes/alton-brown/perfect-scrambled-eggs-recipe-2107541",
    rating: 3,
    comments: "Just your average scrambled eggs.",
    section: "Breakfast",
    shared: "Aria"
};

function addRecipe() {

    const form = document.getElementById("new-recipe");
    const formData = new FormData(form);
    const obj = {};
        

    for (let [key, value] of formData.entries()) { 
        formData.forEach((value, key) => (obj[key] = value));
    }
    
    addToDatabase(obj);
    loadRecipes();
}

async function addToDatabase(object){
    try {
        const response = await fetch('/api/recipe', {
          method: 'POST',
          headers: {'content-type': 'application/json'},
          body: JSON.stringify(object),
        });
  
        console.log("added recipe to database");
      } catch {
        console.log("Error adding to database");
      }
}

function showRecipe(obj) {

    const els = document.getElementsByClassName("recipeList");
    let name = fakeRecipe;
    if (obj == newRecipe) {
        name = newRecipe;
    }
    for (i = 0; i < els.length; i++){
        el = els[i];
        if (el.id == name.id) {
            el.style.display = 'block';
        } else {
            el.style.display = 'none';
        }
    }

    if (name == fakeRecipe) {

        const rcpName = document.getElementById("title");
        const rcpPic = document.getElementById("pic");
        const rcpLink = document.getElementById("url");
        const rcpComments = document.getElementById("comments");

        rcpName.innerHTML = obj.recipeName;
        rcpPic.src = obj.picURL;
        rcpLink.href = obj.linkURL;
        rcpComments.innerHTML = obj.comments;
    }
}

function showRecipeDdn(){
    showRecipe(sel.value);
}

async function loadRecipes() {
    try {
        // get recipes from database
        const response = await fetch('/api/recipe', {
            method: 'GET',
            headers: {'content-type': 'application/json'},
        });

        const allRecipes = await response.json();


        // create button list
        let newRecipes = [];
        const list = document.getElementsByClassName("recipe-btn");
        let names = []
        let numChars = 0;
        for (let m = list.length - 1; m > 0; m--) {
            let name = list[m].innerText;
            names.push(name.substring(0,name.length-numChars));
            numChars = name.length;
        }

        // find buttons that need to be added
        for (let i = 0; i < allRecipes.length; i++) {
            let found = false;
            for (let j = 0; j < names.length; j++) {
                if (allRecipes[i].recipeName === names[j]) {
                    found = true;
                }
            }
            if (!found) {
                newRecipes.push(allRecipes[i]);
            }
        }

        // add buttons
        for (let k = 0; k < newRecipes.length; k++) {
            var btn = document.createElement("button");

            btn.textContent = newRecipes[k].recipeName;

            btn.type = "button";

            btn.className = "recipe-btn"

            //update to show correct recipe
            btn.addEventListener("click", function() {
                showRecipe(newRecipes[k]);
            }, false);

            const el=list[list.length-1];
            
            el.appendChild(btn);


            var opt = document.createElement("option");
            opt.textContent = newRecipes[k].recipeName;
            //update to show correct recipe
            opt.addEventListener("click", function() {
                showRecipe(newRecipes[k]);
            }, false);
            //FIXME: get onclick function working

            const dropdown = document.getElementsByClassName("recipes-dropdown-list");
            const ddnEl = dropdown[dropdown.length-1];
            ddnEl.appendChild(opt);
        }

    } catch {
        console.log("Error getting recipes from database");
    }
}