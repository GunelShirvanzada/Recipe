const resault = document.querySelector('#result');
const input = document.querySelector('#user-inp');
const btn = document.querySelector('#search-btn');

const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

btn.addEventListener('click', () => {
    const getValue = input.value.trim().toLowerCase();
    getApi(getValue);
});

const getApi = async (element) => {
    if (element !== '') {
        const data = await (await fetch(url + element)).json();

        resault.innerHTML ='';
        resault.innerHTML += `<img src='${data.meals[0].strMealThumb}'>
        <div class="details">
            <h2>${data.meals[0].strMeal}</h2>
            <h4>${data.meals[0].strArea}</h4>
        </div>
        <div id="ingredient-con">
            <ul id='ingredient-list'></ul>
        </div>
        <div id="recipe">
            <button id="hide-recipe">X</button>
            <pre id="instructions">${data.meals[0].strInstructions}</pre>
        </div>
        <button id="show-recipe">View Recipe</button>
        `
        const listEl = (() => {
            const list = document.querySelector('#ingredient-list');
            for (let i = 0; i <= 20; i++) {
                const ingredient = data.meals[0][ `strIngredient${i}`];
                const measure = data.meals[0][ `strMeasure${i}`];
                if (ingredient !== '' && measure !== '') {
                    list.innerHTML += `<li>${ingredient} - ${measure}</li>`
                }
            }
        });
        listEl();
        
        const recipeEl = (() => {
            
            const btnX = document.querySelector('#hide-recipe')
            const btnShow = document.querySelector('#show-recipe');

            btnShow.addEventListener('click', )

        }); 
        recipeEl();        
    }   
};

// const abc = async () => {const abcData = await (await fetch(url)).json(); console.log(abcData);}
// abc()