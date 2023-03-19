const mongoose=require("mongoose")
const express=require("express");  
const router=express.Router();

router.get("/getinventory",async (req,res)=>{
    try{   
        const fetched_data = await mongoose.connection.db.collection("inventories"); 
        await fetched_data.find({}).toArray(async function(err,data){
            if(err) 
             console.log(err) 
            else 
            {  
                console.log("-------------------------------INVENTORY-----------------------------------")
                console.log(data)
                console.log("-----------------------------------------------------------------------------")
            }
        })
        res.json({success:true})
    }catch(error){
        console.log(error)
        res.json({success:false})
    }
})

module.exports=router
