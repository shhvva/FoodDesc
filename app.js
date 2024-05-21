const api_key = "API_KEY";
const api_id = "API_ID";
const url = "https://api.edamam.com/api/recipes/v2?type=public&q=";

window.addEventListener("load", () => fetchRecipie("chicken"));

async function fetchRecipie(query) {
  const res = await fetch(`${url}${query}&app_id=${api_id}&app_key=${api_key}`);
  const data = await res.json();

  // Check if data.hits is an array and has at least one element
  if (Array.isArray(data.hits) && data.hits.length > 0) {
    const cardContainer = document.getElementById("card-container");
    const recipeCardTemplate = document.getElementById("template-recipe-card");
    cardContainer.innerHTML = "";

    // Loop through the first 6 recipes and create a card for each
    for (let index = 0; index < 6 && index < data.hits.length; index++) {
      const ingredients = data.hits[index].recipe.ingredientLines;
      const img = data.hits[index].recipe.image;
      const lab = data.hits[index].recipe.label;
      const ur = data.hits[index].recipe.url;
      const cal = parseInt(data.hits[index].recipe.calories);

      // Create a new card for each recipe
      const cardClone = recipeCardTemplate.content.cloneNode(true);
      fillDataFromServer(cardClone, ingredients.join("\n"), img, lab, ur, cal);
      cardContainer.appendChild(cardClone);
    }
  } else {
    console.error("No recipes found.");
  }
}

function fillDataFromServer(cardClone, ingredientText, img, lab, ur, cal) {
  const recpimg = cardClone.querySelector("#card-img");
  const recptitle = cardClone.querySelector("#card-title");
  const recpingdr = cardClone.querySelector("#card-ingdr");
  const recpsrc = cardClone.querySelector("#recp-source");
  const recpcal = cardClone.querySelector("#card-cal");
  recpimg.src = img;

  recptitle.innerHTML = lab;

  recpingdr.innerHTML = ingredientText;

  recpcal.innerHTML = cal;

  recpsrc.setAttribute("href", ur);
}
