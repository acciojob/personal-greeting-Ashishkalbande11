
import React , { useState } from "react";
import './../styles/App.css';

const App = () => {
  const[name, setName] = useState()
  return (
    <div>
        {/* Do not remove the main div */}
        <label htmlFor="name">Enter your name:</label> <br/><br/>
        <input type="text" id="name" onChange={(e) =>{
            setName(e.target.value);
        }}/>

        <p>{name && `Hello ${name}!`}</p>
        
    </div>
  )
}

export default App
