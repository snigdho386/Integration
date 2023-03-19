const express=require("express");  
const router=express.Router();
const orders=require("../models/Orders"); 

//Ord is supposed to come from front-end
const Ord=require("../orders.json")

// const obj=JSON.parse(aks)


router.post("/createorder",async (req,res)=>{
    try{

        Ord.forEach(obj => { 
            orders.create({
            uid: obj.uid,
            shopName:obj.shopName,
            item:obj.item,
            qty:obj.qty,
            price: (obj.price*obj.qty)
        })
            
        });
       
        res.json({success:true})
    }catch(error){
        console.log(error)
        res.json({success:false})
    }
})

module.exports=router
