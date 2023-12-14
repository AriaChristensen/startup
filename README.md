# startup

Web Address: http://34.229.135.174/

Domain: https://startup.jaromc.com

## Online Recipe Saver

Many people, myself included, grab a tasty-looking recipe from google when they want to make a certain dish. If it is good, they might try to find it again a few weeks later, to find that it is not in the same spot they originally found it, or they don't remember enough of how they found it the first time to find it again. This website will let people compile recipes they find online to a unique digital cookbook for easy access later.

This website will enable people to save URL's to other websites and organize them into different tabs for easy navigation. It will let them share recipes with others and import recipes others shared with them. You can rate each recipe and add comments of your own for next time, as well as pictures of your results. You will also be able to add ingredients from a recipe to a shopping list.

## Key Features

**Authentication --** Users will log in to their own cookbook so that they can upload their own files

**Database Data --** The database will store URL's, comments, and ratings for each recipe.

**Websocket Data --** The website will notify you anytime a recipe is shared with you.

![image](https://github.com/AriaChristensen/startup/assets/145092000/1dec23a5-4f0d-4d53-8a62-79126648258a)

## Deliverable 1 (HTML)

This is basic html code for each page of the website. 

[Home](https://github.com/AriaChristensen/startup/index.html)

[All Recipes](https://github.com/AriaChristensen/startup/allRecipes.html)

[Favorites](https://github.com/AriaChristensen/startup/favorites.html)

[Shared](https://github.com/AriaChristensen/startup/shared.html)

[Cart](https://github.com/AriaChristensen/startup/cart.html)

## Deliverable 2 (CSS)

This is the code for each page of the website with CSS styling added. The website should be responsive to 
both desktop and mobile screen sizes. The buttons will link to appropriate pages once Javascript is added.

[Main](https://github.com/AriaChristensen/startup/main.css)

[Recipes](https://github.com/AriaChristensen/startup/recipes.css)

[Cart](https://github.com/AriaChristensen/startup/cart.css)

## Deliverable 3 (JavaScript)

This deliverable implemented methods to switch between tabs and to add new recipes. Currently the recipes
are all showing the same thing, but that will be updated later when they are being pulled from the
database. It is responsive as well.

## Deliverable 4 (Services)

For this deliverable, I simplified the webpage so that only the necessary requirements are met. When a 
recipe is added from the All Recipes tab, it calls a service that adds the recipe to a list in the backend. 
It then calls another service that gets all the recipes from the list and updates the recipe list buttons 
on the left side to include the new recipe. The login page also displays a quote that is obtained from a 
third party service endpoint.

## Deliverable 5 (Database)

The functionality for this one is the same as for deliverable 4, but now it is drawing from an actual 
database instead of an array stored in the backend. Now if you reload the recipes, they will all show
up instead of starting over.

## Deliverable 6 (Login)

Users can now log into the system. The username is displayed in the top right corner of the recipes page
and they can only log in if they have already created an account. The passwords are encrypted just like
in Simon and it uses cookies to pass information between the client and server. If the website seems to be
behaving strangely, try logging out and logging back in. Sometimes it thinks it has stored your
information when you first open the page even though it hasn't. You can also try refreshing the page if
there seem to be an unusually large number of recipes.
