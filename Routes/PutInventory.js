const mongoose=require("mongoose")
const express=require("express");  
const router=express.Router();  
let orders=require("../orders.json")

    router.put("/putinventory",async (req,res)=>{
    try{   
        const fetched_data = await mongoose.connection.db.collection("inventories");
        //data=fetched_data  
        orders.forEach(async obj=>
            {
                await fetched_data.find({"uid":obj.uid}).toArray(async function(err,data){
                if(err) 
                console.log(err) 
                else 
                {  
                let val=parseInt(data[0].qty)-parseInt(obj.qty) 
                obj.qty=val.toString()  
                console.log("qty: ",obj.qty)
                await fetched_data.findOneAndReplace({"uid":obj.uid}, {
                    uid: obj.uid,
                    shopName: obj.shopName,
                    item: obj.item, 
                    qty: obj.qty, 
                    price: obj.price
                });
                console.log("updated ",obj.qty, typeof(obj.qty))
                }
            })  
        })  
       
         res.json({success:true})
    }
    catch(error){
        console.log(error)
        res.json({success:false})
    }
})



module.exports=router
