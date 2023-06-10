import React from 'react';
import Navbar from './Navbar';

export default function () {
    const myStyle={
        margin:"100px",
        backgroundColor:"#90EE90",
        padding:"25px",
        color:"#000"

    }

  return (
    <div >
        <Navbar/>
        <button style ={myStyle}><a href="/shop/Items"><h5>Go to Inventory</h5></a></button>
        <button style={myStyle}><a href="/shop/Orders"><h5>Go To Your Orders</h5></a></button>
        <button style={myStyle}><a href="/shop/Cart"><h5>Go To Your Cart</h5></a></button>

        <h2 style={{color:"yellow"}}>Available Shops</h2>
    </div>
  )
}
