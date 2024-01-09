let searchBar = document.getElementById("searchBar");
const searchButton = document.getElementById("searchButton");
const classContainer = document.getElementById("classContainer");
const mainContainer = document.getElementById("mainContainer");
searchButton.onclick = () => {
 food = searchBar.value;
 searchBar.value = '';

  textData();
console.log(food)
textData()
};
function getData() {
  fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      displayData(data);
    });
}

function displayData(inputData) {
  
  classContainer.innerHTML = `<h2>Random Food Items</h2>
    <img id="randomFood" src="${inputData.meals[0].strMealThumb}"/>
    <h3>${inputData.meals[0].strMeal}</h3>
     `;
    }
getData();
function textData() {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      listData(data);
    })
    .catch((err) => console.log(err));
}

function listData(foodData) {

  mainContainer.innerHTML = `<h3>Searched Food Items</h3>
    <div class="food-list">
    <div class="food-item">
    
    <img id="foodItems" src="${foodData.meals[0].strMealThumb}"/>
    <h4>${foodData.meals[0].strMeal}</h4>
    </div>
    <div class="food-item">
    
    <img id="foodItems" src="${foodData.meals[1].strMealThumb}"/>
    <h4>${foodData.meals[1].strMeal}</h4>
    </div>
    <div class="food-item">
    
    <img id="foodItems" src="${foodData.meals[2].strMealThumb}"/>
    <h4>${foodData.meals[2].strMeal}</h4>
    </div>
    <div class="food-item">
    
    <img id="foodItems" src="${foodData.meals[3].strMealThumb}"/>
    <h4>${foodData.meals[3].strMeal}</h4>
    </div>
    <div class="food-item">
    
    <img id="foodItems" src="${foodData.meals[4].strMealThumb}"/>
    <h4>${foodData.meals[4].strMeal}</h4>
    </div>
    <div class="food-item">
    
    <img id="foodItems" src="${foodData.meals[5].strMealThumb}"/>
    <h4>${foodData.meals[5].strMeal}</h4>
    </div>
    </div>
    `;
}



