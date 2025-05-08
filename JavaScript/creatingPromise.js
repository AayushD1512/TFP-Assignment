//---------------------------------------------------------- Creating A Promise-------------------------------------------------------------

// console.log("START"); // Step 1: Logs immediately

// // Step 2: Creating a custom Promise
// const pr = new Promise(function promiseCallback(resolve, reject) {
//     console.log("PROMISE CB START"); // Step 3: Logs immediately when Promise is created

//     // Set a timeout to REJECT after 4 seconds
//     setTimeout(function rejectHandler() {
//         console.log("tried to reject");
//         reject("Oops! Something went wrong...");
//     }, 4000); // Will fire at T+4s

//     // Set a timeout to RESOLVE after 10 seconds
//     setTimeout(function resolveHandler() {
//         console.log("tried to resolve");
//         resolve(["ud123ab123"]);
//     }, 10000); // Will fire at T+10s

//     console.log("PROMISE CB END"); // Step 4: Logs right after setting the timeouts
// });

// console.log(pr); // Step 5: Logs the Promise in "pending" state
// console.log("END"); // Step 6: Logs immediately after promise setup

// // Step 7: Attach success and error handlers
// pr.then(function successHandler(res) {
//     console.log("✅ success:", res);
// }).catch(function errorHandler(err) {
//     console.log("❌ failed:", err);
// });

//----------------------------------------------------------Simple Render UI ONE RECIPE---------------------------------------------------------------------

// const pr = fetch('https://dummyjson.com/recipes');
// pr.then((res)=>{
//     console.log("Successfully retrieved data from API");
//     const pr2 = res.json();
//     pr2.then(RenderUI);
// }).catch((err)=>{
// console.log("Oops! Something went wrong...");
// });

// const content = document.getElementsByClassName(".main-content");

// const RenderUI = (data)=>{
//     console.log(data);
//     const recipe = data.recipes[1];

//     const content = document.querySelector(".main-content");
//     const img = content.querySelector("img");
//     const title = content.querySelector("h4");
//     const paragraph = content.querySelector("p");

//     img.src = recipe.image;
//     title.textContent = recipe.name;
//     paragraph.textContent = `Calories: ${recipe.caloriesPerServing}`;

// }


//---------------------------------------------------------DYNAMIC Multiple Recipe---------------------------------------------------------------

//--------------------- This is GPT Generated for the search Query------------------------------------

// let allRecipes = []; // global to access in input event

// fetch('https://dummyjson.com/recipes')
//   .then(res => res.json())
//   .then(data => {
//     allRecipes = data.recipes; // store full list
//     renderUI(allRecipes); // initially render all
//   })
//   .catch(err => console.error("Error:", err));

//   const input = document.querySelector(".search-bar input");

// input.addEventListener("input", () => {
//     const query = input.value.toLowerCase();
    
//     const filtered = allRecipes.filter(recipe => 
//         recipe.name.toLowerCase().includes(query)
//     );

//     renderUI(filtered); // show filtered recipes
// });

// const main = document.querySelector("main");

// const renderUI = (data) => {
//     main.innerHTML = ""; // clear previous cards

//     data.forEach(recipe => {
//         const div = document.createElement("div");
//         div.className = "main-content";

//         const imageUrl = recipe.image || 'https://via.placeholder.com/300';

//         div.innerHTML = `
//             <img src="${imageUrl}" alt="${recipe.name}">
//             <h4>${recipe.name}</h4>
//             <p>Calories: ${recipe.calories}</p>
//         `;

//         main.appendChild(div);
//     });
// };

//--------------------------------------------------------------XXXXXXXXX---------------------------------------------------------------

let allRecipe = [];

fetch('https://dummyjson.com/recipes')
  .then((res) => res.json())
  .then((data) => {
    console.log("success");
    allRecipe = data.recipes;  // store the array
    console.log(allRecipe);
    RenderUI(allRecipe);       // pass the array directly
  })
  .catch((err) => {
    console.log("Error", err);
  });

const input = document.querySelector(".search-bar input");

input.addEventListener("input", () => {
  const query = input.value.toLowerCase();

  const filtered = allRecipe.filter(recipe =>
    recipe.name.toLowerCase().includes(query)
  );

  RenderUI(filtered);
});

const main = document.querySelector("main");

const RenderUI = (recipes) => {
  main.innerHTML = ""; // clear previous content

  for (let i = 0; i < recipes.length; i++) {
    const div = document.createElement("div");
    div.className = "main-content";
    div.innerHTML = `
      <img src="${recipes[i].image}">
      <h4>${recipes[i].name}</h4>
      <p>${recipes[i].caloriesPerServing}</p>
    `;

    main.appendChild(div);
  }
};

// ------------------------- Make into into function and callback ------------------

// const getData = (fn) => {
//     const pr = fetch("https://dummyjson.com/recipes");
//     pr.then((res) => {
//         const pr2 = res.json();
//         pr2.then(fn);
//     }).catch((err) => {
//         console.log("🚨 Error: ", err);
//     });
// };

// const parent = document.getElementsByTagName("main")[0];

// const renderUI1 = (data) => {
//     console.log("✅", data);
//     const recipes = data.recipes;

//     for (let i = 0; i < recipes.length; i++) {
//         const container = document.createElement("div");
//         container.className = "recipe-card";
//         container.innerHTML = `
//             <h4>${recipes[i].name}</h4>
//             <img src="${recipes[i].image}">
//             <p>${recipes[i].cuisine}</p>
//         `;
//         parent.appendChild(container);
//     }
// };

// const renderUI2 = (data) => {
//     console.log("✅", data);
//     const recipes = data.recipes;

//     for (let i = 0; i < recipes.length; i++) {
//         const container = document.createElement("div");
//         container.className = "recipe-card";
//         container.innerHTML = `
//             <h1>${recipes[i].name}</h1>
//             <h4>${recipes[i].rating}</h4>
//         `;
//         parent.appendChild(container);
//     }
// };

// getData(renderUI1);


// ------------------------- Make into into function and callback ------------------

// const getData = (fn) => {
//     const pr = fetch("https://dummyjson.com/recipes");
//     pr.then((res) => {
//         const pr2 = res.json();
//         pr2.then(fn);
//     }).catch((err) => {
//         console.log("🚨 Error: ", err);
//     });
// };

// const parent = document.getElementsByTagName("main")[0];

// const renderUI1 = (data) => {
//     console.log("✅", data);
//     const recipes = data.recipes;

//     for (let i = 0; i < recipes.length; i++) {
//         const container = document.createElement("div");
//         container.className = "recipe-card";
//         container.innerHTML = `
//             <h4>${recipes[i].name}</h4>
//             <img src="${recipes[i].image}">
//             <p>${recipes[i].cuisine}</p>
//         `;
//         parent.appendChild(container);
//     }
// };

// const renderUI2 = (data) => {
//     console.log("✅", data);
//     const recipes = data.recipes;

//     for (let i = 0; i < recipes.length; i++) {
//         const container = document.createElement("div");
//         container.className = "recipe-card";
//         container.innerHTML = `
//             <h1>${recipes[i].name}</h1>
//             <h4>${recipes[i].rating}</h4>
//         `;
//         parent.appendChild(container);
//     }
// };

// getData(renderUI1);