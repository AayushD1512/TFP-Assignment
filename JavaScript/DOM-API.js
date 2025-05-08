// DOM = DOCUMENT OBJECT MODEL
//             Object{} that represents the page you see in the web browser 
//             and provides you with an API to interact with it.
//             Web browser constructs the DOM when it loads an HTML document,
//             and structures all the elements in a tree-like representation.
//             JavaScript can access the DOM to dynamically 
//             change the content, structure, and style of a web page.

console.log(document);
console.dir(document);

document.title = "My website";
document.body.style.backgroundColor = "hsl(0, 0%, 15%)";

const username = "Aayush Dubey";
const welcomeMsg = document.getElementById("welcome-msg");
welcomeMsg.style.color = "White";
welcomeMsg.textContent += username === "" ? `Guest` : username;


// ----------------------------------------------------------------------------------------------------------------------------------------------
/*element selectors - Methods used to target and manipulate HTML elements. 
                      They allow you to select one or multiple HTML elements
                      from the DOM (Document object model)

1. document.getElementById()            -> ELEMENT OR NULL
2. document.getElementsClassName()      -> HTML COLLECTION
3. document.getElementsByTagName()      -> HTML COLLECTION
4. document.querySelector()             -> ELEMENT OR NULL
5. document.queryse1ectorAll()          -> NODELIST

*/

const first = document.getElementsByClassName("first-text");
console.log(first);
first[0].style.backgroundColor= "Green";

const h4Element = document.getElementsByTagName("h4");
Array.from(h4Element).forEach(h4Element=>{
    h4Element.style.backgroundColor = "yellow";
})

const liItem = document.getElementsByTagName("li");
liItem[0].style.backgroundColor="purple";
liItem[1].style.backgroundColor="white";
liItem[2].style.backgroundColor="red";

const liOne = document.querySelector("li");
liOne.style.backgroundColor= "red";

const h4All = document.querySelectorAll("h4");
h4All.forEach(h4=>{
    h4.style.backgroundColor ="white";
})




// ----------------------------------------------------------
// Select the element with the class 'first-text'
const firstText = document.querySelector(".first-text"); 

// Create a new h5 element
const heading = document.createElement("h5");
heading.innerText = "Please connect";

// Append the heading to the selected element
firstText.appendChild(heading);

// Create another new heading
// const newHeading = document.createElement("h5");
heading.innerText = "Please comment and like";
// Append the new heading to the same element
firstText.appendChild(heading);

