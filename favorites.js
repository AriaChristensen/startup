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
    el = document.getElementById("all");
    el.style.width = '95%';

    type.style.width = '150%';  
}

/*
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
*/