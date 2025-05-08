// function handleUsername(e) {
//     // console.log(e.target.value);

//     // const form = document.getElementsByTagName("form")[0]; // Correctly select the form
//     // const p = document.createElement('p'); // Create a new <p> element
//     // p.textContent = "Hello " + e.target.value; // Set text content

//     // form.appendChild(p); // Append to the form

//     const helloText = document.getElementById("hello-text");
//     helloText.innerText = "Hello "+ e.target.value;
//     console.log(e);
// }

// function handleSubmit(e){
//     console.log(e);
//     e.preventDefault();
//     const userName = e.target[0].value;
//     const passWord = e.target[1].value;
//     const email = e.target[2].value;
//     console.log("userName", userName);
//     console.log("pass", passWord);
//     console.log("email", email);


// }

// Make sure to remember when fetching details
const card = document.getElementsByClassName("show-text")[0];
const form = document.getElementsByTagName("form")[0];
const handleUsername = (e) =>{
    const usrname = e.target.value;
    const text1 = document.getElementById('t1');

    text1.textContent=`Username: ${usrname}`;
    
};

const handlePass = (e) =>{
    const pass = e.target.value;
    
    const text2 = document.getElementById('t2');
    text2.textContent= `Password: ${pass}`;
    
};

const handleEmail = (e) =>{
    const email = e.target.value;
    

    const text3 = document.getElementById('t3');
    text3.textContent = `Email ID: ${email}`;
    
};

const handleSubmit = (e) =>{
    e.preventDefault();
    // const form = document.querySelector("form");
    // // const form = e.target;
    // const card = document.querySelector(".show-text");
    form.style.display = "none";
    card.style.display = "block";
    console.log(form);
}

const handleBack = (e) =>{
    // const form = document.querySelector("form");
    // // const form = e.target;
    // const card = document.querySelector(".show-text");
    form.style.display ="block";
    card.style.display = "none";
}