import React from 'react'
import './dis.css';    

function Display() {
  return (
    <div>
      {/* <h1 className='disp'> Welcome!!!</h1> */}
      <div class="text-block">
    <h4 style={{fontSize:"60px",textDecoration:"none",color:"green"}}>Book your tickets here!!!</h4>
    <p style={{fontSize:"30px",textDecoration:"none", color:"blue"}}>HAVE A SAFE JOURNEY</p>
    <a href="/View" style={{textDecoration:"none",color:"white"}}><button  style={{fontSize:"20px",textDecoration:"none"}} > Click here to book</button></a>
  </div>
    </div>
    
  )
}

export default Display
