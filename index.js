const express=require("express") 
const app=express() 
const mongoDB=require("./db") 
const PORT=4000 
app.use(express.json()); 

mongoDB() 

app.use('/api',require("./Routes/CreateOrder"))
app.use('/api',require("./Routes/GetOrders"))
app.use('/api',require("./Routes/PutInventory"))
app.use('/api',require("./Routes/GetInventory"))
app.use('/api',require("./Routes/CreateInventory"))


app.listen(PORT,()=>{
    console.log(`Server is running in PORT : ${PORT}`)
}) 

















































