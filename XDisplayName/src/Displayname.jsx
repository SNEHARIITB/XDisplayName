import React from "react";
import { useState } from 'react'

export default function DisplayName(){

      
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [fullname, setFullName] = useState("");

  

  function handleFirstNameChange(e){
    setFirstName(e);
  }
  function handleLastNameChange(e){
    setLastName(e);
    
  }
  const handleFullName = (e) =>{
    e.preventDefault(); 
    setFullName(`${firstname} ${lastname}`)
  };
    
  
  return (
    <>
      <form onSubmit={handleFullName}>
        <h1>Full Name Display</h1>
        <label htmlFor="firstname">First Name : </label>
        <input type= "text" name="firstname" id="firstname" required
          onChange={(e) => handleFirstNameChange(e.target.value)}
        />
        <br />
        <label htmlFor="lastname">Last Name : </label>
        <input type= "text" name="lastname" id="lastname"
            required
           onChange={(e) => handleLastNameChange(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
        <br />
        {fullname && <p>Full Name : {fullname}</p>}
        <div id="next" style={{ display: "none" }}></div>

      </form>
      
    </>
  )
}