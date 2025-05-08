import React, { useState } from "react";
import ReactDom from "react-dom/client";

const domRoot = document.getElementById("root");
const reactRoot = ReactDom.createRoot(domRoot);

const App = ()=>{

    const [name, setName] = useState("");

    const handleChange = (e)=>{
        const val = e.target.value;
        setName(val);
    }
    
    return(
        <div>
            <input value={name} onChange={handleChange} />
            
            
        </div>
    )
}

reactRoot.render(<App />)