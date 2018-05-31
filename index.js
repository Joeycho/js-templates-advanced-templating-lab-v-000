function init() {
  //put any page initialization/handlebars initialization here
  var recipeTemplate = Handlebars.compile(document.getElementById("recipe-form").innerHTML);
  var result = recipeTemplate();
  document.getElementsByTagName("main")[0].innerHTML += result;
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

Handlebars.registerHelper('displayIngredient', function() {
    return new Handlebars.SafeString(this.value)
})

function createRecipe() {
  var recipe = {
  name: "closed",
  description: "default",
  ingredients: [
    {name:'one'},
    {name:'two'},
    {name:'three'},
    {name:'four'},
    {name:'five'}
  ]
  }



 recipe.name = document.getElementById("name").value
 recipe.description = document.getElementById("description").value
 recipe.ingredients = document.getElementsByName("ingredients")

 var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
 var result = template(recipe);
 document.getElementsByTagName("main")[0].innerHTML = result;

}

Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
function renderMain() {
var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
var html = template({description:document.getElementById("tdescription").value,ingredients:document.getElementsByName("tingredients")});
}

Handlebars.registerPartial('recipeFormPartial', document.getElementById("recipe-form-partial").innerHTML)
function renderMain() {
var template = Handlebars.compile(document.getElementById("main-template").innerHTML);
var html = template({name: 'Gordon Ramsay'});
}

function displayEditForm(){
  var recipeTemplate = Handlebars.compile(document.getElementById("recipe-form-template").innerHTML);
  var result = recipeTemplate();
  document.getElementsByTagName("main")[0].innerHTML += result;
}

function updateRecipe(){
  var recipe = {
  name: "closed",
  description: "default",
  ingredients: [
    {name:'one'},
    {name:'two'},
    {name:'three'},
    {name:'four'},
    {name:'five'}
  ]
  }


   recipe.name = document.getElementById("tname").value
   recipe.description = document.getElementById("tdescription").value
   recipe.ingredients = document.getElementsByName("tingredients")

   var template = Handlebars.compile(document.getElementById("recipe-template").innerHTML);
   var result = template(recipe);
   document.getElementsByTagName("main")[0].innerHTML = result;


}
