let fs = require('fs');
const express=require("express");  
const router=express.Router();
const Inventory=require("../models/Inventory"); 
let process = require("process");
let moveFrom = "./data/shops";

router.post("/createinventory",async (req,res)=>{
try{
      
        await fs.readdir(moveFrom, async(err, files)=>{
        if (err) {
            console.error("Could not list the directory.", err);
            process.exit(1);
        }
        else
        {
            files.forEach(async (file)=>
            {
                let obj=require("../data/shops/"+file) 
                obj.forEach(async (data,index)=>{
                    Inventory.create({
                        uid: data.uid,
                        shopName:data.shopName,
                        item:data.item,
                        qty:data.qty,
                        price:data.price
                    })
                
                }) 
            })  
        }
    });   
    res.json({success:true})
    }
    catch(error){
        console.log(error)
        res.json({success:false})
    }
})

module.exports=router
