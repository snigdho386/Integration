import React, { useState, useRef, useEffect } from 'react';
import Butter from './Butter.jpg';
import Rice from './Rice1.jpg';
import RedLentil from './RedLentil.jpg';
import Curd from './Curd.jpg';
import ChilliPowder from './ChilliPowder.jpg';
import Flour from './Flour.jpg';

import MustardOil from './MusterdOil.jpg';

import Salt from './Salt.jpg';
import YellowLentil from './YellowLentil.jpeg';

import { useDispatchCart, useCart } from './ContextReducer';
import Cart from './Cart.js';


export default function Display(props) {

    const item = props.item;
    const qty = props.qty;
    const price = props.price;
    const shopName = props.shop;
    const [quty, setQty] = useState(1);
    const [size, setSize] = useState("100gms");
    let dispatch = useDispatchCart();
    let data = useCart();

   

    let ind = -1;
    let si = -1, se = -1;
    for (let i = 0; i < size.length; i++) {
        if (size[i] == 'g') {
            ind = i;
            break;
        }
    }

    for (let i = 0; i < price.length; i++) {
        if ((price[i] == '1' || price[i] == '2' || price[i] == '3' || price[i] == '4' || price[i] == '5' || price[i] == '6' || price[i] == '7' || price[i] == '8' || price[i] == '9') && si == -1) {
            si = i;
        }
        if (price[i] == '1' || price[i] == '2' || price[i] == '3' || price[i] == '4' || price[i] == '5' || price[i] == '6' || price[i] == '7' || price[i] == '8' || price[i] == '9' || price[i] == '0') {
            se = i;
        }
    }

    let s = size.substring(0, ind);
    let s1 = price.substring(si, se + 1)
    let finalPrice = (parseInt(s) / 1000) * (parseInt(s1)) * quty;


    const handleAddToCart = async () => {
        await dispatch({ type: "ADD", item: item, quty: quty, size: size, price: finalPrice })
       alert("Item added to your cart. Please Check the Cart section to watch your added items")
        return;
    }

    useEffect(() => {
     
      localStorage.setItem("list",JSON.stringify(data))
       
    }, [data]);

    

    const mystyle = {
        display: "grid",
        backgroundColor: "#878f99",
        padding: "10px",
        margin: "150px",
        float: "left",
        flex: "1",
        gridgap: "10px",
        border: "1px solid black",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        overflow: "hidden", margin: "175px"
    };

    const st = {
        backgroundColor: "#fff",
        color: "#000",
        margin: "5px"
    };

    const alt =
    {
        backgroundColor: "#008080", border: "1px solid black",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        overflow: "hidden", margin: "1px"
    }

    const alt1 =
    {
        border: "1px solid black",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        overflow: "hidden", margin: "1px"
    }












    return (
        <span style={mystyle} >
            <div class="card" >

               
                {item== "Butter" && <img src={Butter} alt="Butter" />}
                {item== "Rice" && <img src={Rice} alt="Rice" />}
                {item=='Red Lentil' && <img src={RedLentil} alt="RedLentil" /> }
                {item=='Yellow Lentil' && <img src={YellowLentil} alt="YellowLentil" /> }
                {item=='Curd' && <img src={Curd} alt="Curd" /> }
                {item=='Salt' && <img src={Salt} alt="Salt" /> }
                {item=='Chilli Powder' && <img src={ChilliPowder} alt="Chilli Powder" /> }
                {item=='Flour' && <img src={Flour} alt="Flour" /> }
               
                {item=='Mustard Oil' && <img src={MustardOil} alt="Mustard Oil" /> }
              
                <h3 class="card-title" style={{ backgroundColor: "#fff", color: "#000" }}>{item}</h3>


                <ul class="list-group list-group-flush">
                    <li class="list-group-item" style={alt}><h5>Item Quantity: </h5><div >{qty}</div></li>

                    <li class="list-group-item" style={alt1} ><h5>Item Price: </h5><div >{price}</div></li>

                    <li class="list-group-item" style={alt}><h5 >Shop Name: </h5><div >{shopName}</div></li>

                    <li class="list-group-item" style={alt1}><label><h5>Number of Packets : </h5></label>

                        <select onChange={(e) => setQty(e.target.value)}>
                            <option >1</option>
                            <option >2</option>
                            <option >3</option>
                            <option >4</option>
                            <option >5</option>

                        </select>
                    </li>


                    <li class="list-group-item" style={alt}><label ><h5>Choose a quantity: </h5></label>

                        <select onChange={(e) => setSize(e.target.value)}>
                            <option >100 gms</option>
                            <option >500 gms</option>
                            <option >1000 gms</option>

                        </select></li>

                    <li class="list-group-item" style={alt1}><h5>Total Price :   Rs {finalPrice}/-</h5></li>

                    <li class="list-group-item" style={st}><button onClick={handleAddToCart}>Add to Cart</button></li>
                   
                </ul>
            </div> 
 
        </span>
    )
}
