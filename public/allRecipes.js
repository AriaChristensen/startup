class Page {
    constructor() {
        const userNameEl = document.querySelector('.user-name');
        //console.log(userNameEl); // this is returning null?
       // userNameEl.textContent = this.getUserName();
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
    recipeName: "French Toast",
    picURL: "https://th.bing.com/th?id=OSK.8d6071ecfcb936b04aed13baedb764fc&w=228&h=171&rs=2&qlt=80&o=6&cdv=1&dpr=1.3&pid=16.1",
    linkURL: "https://www.foodnetwork.com/recipes/alton-brown/french-toast-recipe-1942216",
    rating: 4,
    comments: "Great recipe!! Try adding cinnamon and coconut into the egg mixture as well."
};

function addRecipe() {

    const form = document.getElementById("new-recipe");
    const formData = new FormData(form);
    const obj = {};
    
    

    for (let [key, value] of formData.entries()) { 
        formData.forEach((value, key) => (obj[key] = value));
    }
    

    addToDatabase(obj);
    addToList(testRecipe);
}

function addToDatabase(object){
    // add object to database
}

function addToList(obj) {
    var btn = document.createElement("button");

    btn.textContent = obj.recipeName;

    btn.type = "button";

    btn.className = "recipe-btn"

    //update to show correct recipe
    btn.addEventListener("click", function() {
        showRecipe(fakeRecipe);
    }, false);

    const list = document.getElementsByClassName("recipe-btn");
    const el=list[list.length-1];
    
    el.appendChild(btn);


    var opt = document.createElement("option");
    opt.textContent = obj.recipeName;
    //update to show correct recipe
    opt.addEventListener("click", function() {
        showRecipe(fakeRecipe);
    }, false);
    //FIXME: get onclick function working

    const dropdown = document.getElementsByClassName("recipes-dropdown-list");
    console.log(dropdown);
    const ddnEl = dropdown[dropdown.length-1];
    ddnEl.appendChild(opt);
}

function selectCategory(type) {
    let el = document.getElementById("breakfast");
    el.style.width = "95%";
    el = document.getElementById("lunch");
    el.style.width = "95%";
    el = document.getElementById("dinner");
    el.style.width = '95%';
    el = document.getElementById("dessert");
    el.style.width = '95%';
    el = document.getElementById("side");
    el.style.width = '95%';
    el = document.getElementById("other");
    el.style.width = '95%';

    type.style.width = '150%'; 
    // load database 
}

function showRecipe(name) {
    const els = document.getElementsByClassName("recipeList");
    for (i = 0; i < els.length; i++){
        el = els[i];
        if (el.id == name.id) {
            el.style.display = 'block';
        } else {
            el.style.display = 'none';
        }
    }
}

function showRecipeDdn(){
    showRecipe(sel.value);
}

//TODO: figure out cart
//TODO: figure out favorite
//TODO: figure out rating