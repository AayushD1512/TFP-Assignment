const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

const addContent = ()=>{
    if(inputBox.value===""){
        alert("Need a task to be added");
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveData();
    }
    inputBox.value="";
}


listContainer.addEventListener("click", (e)=>{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
    
});

const saveData = ()=> {
    localStorage.setItem("data", listContainer.innerHTML);
}

const showData = ()=> {
    listContainer.innerHTML = localStorage.getItem("data");
}
showData();