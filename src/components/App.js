// create your App component here
import React, { useState, useEffect } from "react";

function App(){
    const [randomDog, setRandomDog] = useState('')
    
    
    useEffect(() =>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(r=>r.json())
        .then(r =>{
            setRandomDog(r.message)
        })
    })

    return (
        <div>
            {randomDog ? <img src={randomDog} alt="A Random Dog"/> : <p>Loading...</p> }
        </div>
    )
}
export default App;