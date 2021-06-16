


const searchInput = document.getElementById('search');
const submit = document.getElementById('submit');
const mealsEl = document.getElementById('meals');
const resultHead = document.getElementById('result-heading');
const singleMeal = document.getElementById('single-meal');



//search Meal and fetch from API
function searchMeal(e){
    e.preventDefault();

    // Default value of result Heading
    resultHead.innerHTML = '';

    // get search term
    const term = searchInput.value;
    
    
    if(term.trim()){
        
        

        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
        .then(response => response.json())
        .then(data => {
            ;
            resultHead.innerHTML = `<h2>Search Result of '${term}':</h2>`;
            if(data.meals === null){
                resultHead.innerHTML = `<h2>There is no search result! Try Again.</h2>`;
            }else {
                mealsEl.innerHTML = data.meals.map(meal =>`
                    <div class="food" onClick="getDetails()">
                        <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                        <h4>${meal.strMeal}</h4>
                        <div id="info" class="meal-info" data-mealID="${meal.idMeal}">
                            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                            <h4>${meal.strMeal}</h4>
                            
                        </div>
                
                   </div>
                   
                   
                   
                   `)
            }
        });

        searchInput.value = "";

    }else {
        alert('Please Enter Search Input!');
    }


    
   
   

}

// Search
submit.addEventListener("click", searchMeal);




function getDetails() {
    const foodInfo = document.getElementById('info');
    const mealsEl = document.getElementById('meals');
    
    foodInfo.style.display = 'block';
    mealsEl.style.display = 'none';
    console.log('error!')
}


// Showing the Products Categories
// fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
// .then(response => response.json())
// .then(data => getFoods(data))

// const getFoods = foods => {
//     const recipesDiv = document.getElementById('recipes');

//     const allFoods = foods.categories;

//     for (let i = 0; i < allFoods.length; i++) {
//         const food = allFoods[i];

//         const foodDiv = document.createElement('div');
//         foodDiv.className = 'food';

//         const foodInfo = `
//             <img src="${food.strCategoryThumb}">
//             <h4>${food.strCategory}</h4>
//         `


//         foodDiv.innerHTML = foodInfo;
//         recipesDiv.appendChild(foodDiv);

//         //console.log("inside of Loop", food)
//     }
    
     
// }



    