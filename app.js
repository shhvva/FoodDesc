const API_KEY = "eaf5a5e9188f4ae9bd204d7653597073";
const url = "https://api.spoonacular.com/recipes/complexSearch?query=";


window.addEventListener("load", () => fetchNews("pasta"));

function reload() {
    window.location.reload();
}

async function fetchNews(query) {
    const res = await fetch(`${url}${query}`);
    const data = await res.json();
    bindData(data.results);
}

function bindData(articles) {
    const cardContainer = document.getElementById("card-container");
    const recipeCardTemplate = document.getElementById("template-recipe-card");

    cardContainer.innerHTML = "";

    articles.forEach((article) => {
        if (!article.urlToImage) return;
        const cardClone = recipeCardTemplate.content.cloneNode(true);
        fillDataInCard(cardClone, article);
        cardContainer.appendChild(cardClone);
    });
}

function fillDataInCard(cardClone, article) {
    const newsImg = cardClone.querySelector("#card-img");
    // const newsTitle = cardClone.querySelector("#news-title");
    // const newsSource = cardClone.querySelector("#news-source");
    // const newsDesc = cardClone.querySelector("#news-desc");

    newsImg.src = results.image;

    // newsTitle.innerHTML = article.title;
    // newsDesc.innerHTML = article.description;

    // const date = new Date(article.publishedAt).toLocaleString("en-US", {
    //     timeZone: "Asia/Jakarta",
    // });

    // newsSource.innerHTML = `${article.source.name} · ${date}`;

    cardClone.firstElementChild.addEventListener("click", () => {
        window.open(article.url, "_blank");
    });
}

























// const api_key = "1b86628b4c59044fed8475f52415ebbc";
// const api_id = "69ad9c27";
// const url = "https://api.edamam.com/api/recipes/v2?type=public&q="

// window.addEventListener('load',() => fetchRecipie("chicken"));

// async function fetchRecipie(query){
//     const res = await fetch(`${url}${query}&app_id=${api_id}&app_key=${api_key}`);
//     const data = await res.json();
//     console.log(data.hits.recipe.ingredient);
//     bindData(data.hits.recipe.ingredient);
// }

// function bindData(hits){

//     const cardContainer = document.getElementById('card-container');
//     const recipeCardTemplate = document.getElementById('template-recipe-card');
//     cardContainer.innerHTML = '';

//     for (let i = 0; i < 6; i++) {

//         const cardClone = recipeCardTemplate.content.cloneNode(true);
//         fillDataFromServer(cardClone,hits,i);
//         cardContainer.appendChild(cardClone);
//     }

// }

// function fillDataFromServer(cardClone,hits,i){
//         const recpimg = cardClone.querySelector('#card-img');    
//         const recptitle = cardClone.querySelector('#card-title');
//         const recpcal = cardClone.querySelector('#card-cal');
//         const recpeunit = cardClone.querySelector('#card-unit');
        
//         // recpimg.src = hits[0].recipe.images.SMALL.url;
//         // recptitle.innerHTML = JSON.stringify(hits[i].label);
//         recpcal.innerHTML = hits[1].ingredient[0];
        
// }