import React,{useState} from 'react';





export default function Navbar() {

 const st1=
 {
  border: "5px solid black"
 }
  return (
    <div><nav className=" navbar navbar-expand-lg navbar-light bg-light" id="navbar"style={st1}>
    <a className="navbar-brand" href="#" >
      <h3>Welcome to the store</h3></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
      
      
    
    </div>
    
  </nav>
 
</div>
  )
}
 
