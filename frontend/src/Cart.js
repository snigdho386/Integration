import { React, useState, useEffect } from 'react';

import { useCart, useDispatchCart } from './ContextReducer';
import Navbar from './Navbar.js';

export default function Cart() {

    const checkOutHandler = async () => {
        localStorage.clear();

    }
    let data = localStorage.getItem("list");
    data = data ? JSON.parse(data) : [];
    let dispatch = useDispatchCart();






    let totalPrice = data.reduce((total, food) => total + food.price, 0)

    const st =
    {
        border: "1px white",
        opacity: "1"
    }
    const st1 =
    {
        color: "white"
    }

    const st2 =
    {
        color: "yellow"
    }



    return (
        <div>


            <div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md' style={{ color: "white", border: "5px solid black", boxShadow: "2px 2px 2px 2px green" }}>

                {totalPrice == 0 &&
                    <h1 style={{ color: "black", backgroundColor: "yellow" }} >Your Cart is Empty</h1>}

                {totalPrice != 0 &&
                    <> <table className='table table-hover ' >
                        <thead className=' text-success fs-4' >
                            <tr style={st1}>
                                <th scope='col' ><h2>#</h2></th>
                                <th scope='col' ><h2>Name</h2></th>
                                <th scope='col' ><h2>Quantity</h2></th>
                                <th scope='col' ><h2>Option</h2></th>
                                <th scope='col' ><h2>Amount</h2></th>

                            </tr>
                        </thead>
                        <tbody>
                            {data.map((food, index) => (
                                <tr >
                                    <th scope='row' style={{ color: "white" }}><h2>{index + 1}</h2></th>
                                    <td style={st2}><h3>{food.item}</h3></td>
                                    <td style={st2}><h3>{food.qty}</h3></td>
                                    <td style={st2}><h3>{food.size}</h3></td>
                                    <td style={st2}><h3>Rs {food.price} /-</h3></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                        <div><h1 className='fs-2' style={st1}>Total Price: Rs {totalPrice}/-</h1></div>
                        <div>
                            <button style={{ color: "black", backgroundColor: "yellow", margin: "5px" }} onClick={checkOutHandler}> Check Out </button>
                        </div>
                    </>
                }



            </div>



        </div>
    )
}
