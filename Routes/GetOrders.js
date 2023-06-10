const mongoose=require("mongoose")
const express=require("express");
const router=express.Router();

router.get("/getorders", async (req,res)=>{
    try{
        const fetched_data = await mongoose.connection.db.collection("orders");
        const data = await fetched_data.find().sort({createdAt: -1}).toArray();
        res.json(data)
    }catch(error){
        console.log(error)
        res.json({success:false})
    }
})

module.exports=router
