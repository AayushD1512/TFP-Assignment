const main = document.querySelector(".main");
const card = document.querySelector(".card-content");

const handleUsername = (e) => {
  const username = e.target.value;
  // if (username !== username.toLowerCase()) {
  //   alert("Username should be in lowerCase");
  // } 
    const getname = document.getElementById("userName");
    getname.textContent = `Username: ${username.toLowerCase()}`;
  
};

const handlePassword = (e) => {
  const password = e.target.value;

  const getpass = document.getElementById("passWord");
  getpass.textContent = `Password: ${password}`;
};

const handleEmail = (e) => {
  const email = e.target.value;

  const getmail = document.getElementById("email");
  getmail.textContent = `Email ID: ${email}`;
};

const handleFormSubmit = (e) => {
  e.preventDefault();
  // console.log(e);
  if (e.target.username.value !== e.target.username.value.toLowerCase()) {
    alert("Username should be in lowerCase");
  } else{
    main.style.display = "none";
    card.style.display = "flex";
    e.target.username.disabled = true;
  }
};

const handleEdit = (e) => {
  // e.preventDefault();
  main.style.display = "block";
  card.style.display = "none";
};

// Simple thing to keep here in mind is you need some elements 
// where you will change their textContent Or you can also do as
// following by creating a element and then append the content
// fetched from user to whereever you'd want

/*
const handlePassword = (e) => {
  const password = e.target.value;
  let getpass = document.getElementById("passWord");

  // If element doesn't exist, create it and append
  if (!getpass) {
    getpass = document.createElement("p"); // or div, span, whatever you prefer
    getpass.id = "passWord";
    
    const card = document.getElementById("card"); // assuming there's a card container
    card.appendChild(getpass);
  }

  // Update text content
  getpass.textContent = `Password: ${password}`;
};

*/