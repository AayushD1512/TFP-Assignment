import React, { useState } from "react";
import ReactDom from "react-dom/client";

const domRoot = document.getElementById("root"); // Main Root
const reactRoot = ReactDom.createRoot(domRoot); // Virtual Dom Root

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const App = () => {
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleName = (e) =>{
        const val = e.target.value;
        setName(val);
    }

    const handleCity = (e) =>{
        const val = e.target.value;
        setCity(val);
    }

    const handleEmail = (e) =>{
        const val = e.target.value;
        setEmail(val);
    }

    const handleSubmit = (e) =>{
        if(name.length>0 && city.length>2 && emailRegex.test(email)){
            setIsSubmitted(true);
        }else{
            alert("Invalid Form Submission: Check name shoudlnt be empty city should be mmore than 2 char email shoudl be regex verified")
        }
    }

    const handleEdit = ()=>{
        setIsSubmitted(false);
    }

    return(
        <>
        {isSubmitted ? (
            <section>
                <p>Employee Name: {name}</p>
                <p>Employee City: {city}</p>
                <p>Employee Email: {email}</p>
                <button onClick={handleEdit}>Edit</button>
            </section>
        ) : (

            <div className="form">
            <div className="form-item">
                <label>Name: </label>
                <input type="text" name="username" value={name} onChange={handleName} />
            </div>
            
            <div className="form-item">
                <label>City: </label>
                <input type="text" name="city" value={city} onChange={handleCity} />
            </div>
            
            <div className="form-item">
                <label>Email: </label>
                <input type="email" name="email" value={email} onChange={handleEmail} />
            </div>
            <button onClick={handleSubmit}>Sunmit</button>
        </div>
        )}
        

        

        </>
    );

};


reactRoot.render(<App />);