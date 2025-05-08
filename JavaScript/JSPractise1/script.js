
const showFetchedResult = (arr)=>{
    const parent = document.querySelector(".result-fetched");
    parent.innerHTML = "";
    
    arr.forEach(({formatted}) =>{
        const newPara = document.createElement('p');
        newPara.innerText = formatted;
        newPara.style.cursor = "pointer";
        newPara.onclick = () =>{
            document.getElementById("city").value = formatted;
            parent.innerHTML = "";
        }
        parent.append(newPara);
        
    })
}

const showCards = (arr)=>{
    const parent = document.querySelector(".output-section");
    parent.innerHTML="";

    arr.forEach(({username, cityname})=>{
        const newDiv = document.createElement("div");
        newDiv.className = "container";
        newDiv.innerHTML = `
            <p>Name: ${username}</p>
            <p>City: ${cityname}</p>
        `;

        parent.append(newDiv);
    })
}

const getData = (searchText) =>{

    const API_KEY = "f036540aaf0a402aaac29cb54b96f8c8";
    const spinner = document.getElementById("spinner");
    spinner.style.display = "block"; 
    const pr = window.fetch(`
        https://api.geoapify.com/v1/geocode/autocomplete?text=${searchText}&type=city&limit=10&format=json&filter=countrycode:in&apiKey=${API_KEY}
        `);
    pr.then((res)=>{
        
        const pr2 = res.json();
        pr2.then((data)=>{
            showFetchedResult(data.results);
        })
    }).catch((err)=>{
        console.log(err);
    })
    .finally(() => {
        spinner.style.display = "none"; // Hide spinner
    });

}

let timeId;
const getDebouncedData=(searchText)=>{
    clearTimeout(timeId);

    timeId = setTimeout(()=>{
        getData(searchText);
    },600)
};

const handleCity= (e) =>{
    const searchText = e.target.value;
    
    // getData(searchText);
    getDebouncedData(searchText);
}

// let data = [];

const resInfo = localStorage.getItem("res-info");
const data = resInfo ? JSON.parse(resInfo): [];
const handleSubmit=(e)=>{
    e.preventDefault();
    const username = e.target[0].value;
    const cityname = e.target[1].value;
    data.push({username, cityname});

    localStorage.setItem("res-info", JSON.stringify(data));
    showCards(data);
}