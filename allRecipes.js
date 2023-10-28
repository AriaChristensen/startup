const userNameEl = document.querySelector('.user-name');
userNameEl.textContent = getUserName();

function getUserName() {
    return localStorage.getItem('userName') ?? 'Mystery user';
}

//FIXME: fix username to show up ^^

const testRecipe = {
    favorite: true,
    recipeName: "French Toast",
    picURL: "https://th.bing.com/th?id=OSK.8d6071ecfcb936b04aed13baedb764fc&w=228&h=171&rs=2&qlt=80&o=6&cdv=1&dpr=1.3&pid=16.1",
    linkURL: "https://www.foodnetwork.com/recipes/alton-brown/french-toast-recipe-1942216",
    rating: 4,
    comments: "Great recipe!! Try adding cinnamon and coconut into the egg mixture as well."
};

function addRecipe() {
    form = document.getElementById("new-recipe");
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

    // Set the text of the button
    btn.textContent = obj.recipeName;

    // Set the type of the button
    btn.type = "button";

    btn.class = "recipe-btn"

    //// Add a click event listener to the button
    //btn.addEventListener("click", function() {
    //// Alert a message when clicked
    //alert("Hello, world!");
    //});

    const list = document.getElementsByClassName("recipes");
    document.list.appendChild(btn);

    var opt = document.createElement("option");
    opt.textContent = obj.recipeName;

    const dropdown = document.getElementById("selectRecipe");
    document.dropdown.appendChild(opt);
}

function selectCategory(type) {
    const currElement = document.getElementsByClassName(type);
    currElement.style.width = '150%';
    //currElement.style.text-align = 'left';
    //currElement.style.padding-left = '30%';
}
