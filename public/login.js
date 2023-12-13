function login() {
    const nameEl = document.querySelector("#name");
    localStorage.setItem("userName", nameEl.value);
    window.location.href = "allRecipes.html";
  }

/**
  https://github.com/lukePeavey/quotable
 */
function displayQuote(data) {
  document.getElementById("quote").textContent = data.content;
  document.getElementById("author").textContent = data.author;
}

function callService(url, displayCallback) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      displayCallback(data);
    });
}

callService("https://api.quotable.io/random", displayQuote);
  