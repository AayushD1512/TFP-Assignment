import React from "react";
import ReactDom from "react-dom/client";

const domRoot = document.getElementById("root"); //real DOM
const reactRoot = ReactDom.createRoot(domRoot); //virtual DOM (Lightweight-copy of Real DOM)


const Card = (obj)=> {
    const styleObj = {
        padding: "1rem",
        border: "1px solid brown",
        flexGrow: "1", 
    };

    return(
        <div style={styleObj}>
            <h1>{obj.name}</h1>
            <img src={obj.img} height="200px"/>
        </div>
    )
}


const getData =()=>{
    const pr = fetch('https://api.github.com/users');
    pr.then((res)=>{
        const pr2 = res.json();
        pr2.then((data)=>{
            const parentElem = Parent(data);
            reactRoot.render(parentElem);
        })
    })
}

const Parent = (data) =>{
    return(
        <div>
            {data.map((elem)=>{
                return <Card key={elem.id} name={elem.login} img={elem.avatar_url} />
            })}
        </div>
    );
};

getData();