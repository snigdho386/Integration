const express=require("express")
const app=express()
const mongoDB=require("./db")
const PORT=4000

const cors = require("cors");
app.use(express.json());
app.use(cors({
    origin:"http://localhost:3000"

}))
mongoDB()

app.use('/api',require("./Routes/GetOrders"));
app.use('/api',require("./Routes/GetInventory"));
app.use('/api',require("./Routes/CreateInventory"));
app.use('/api',require("./Routes/CreateOrder"));

app.use('/api/user', require('./Routes/user/GetInventory'));
app.use('/api/user', require('./Routes/user/UpdateThreshold'));

app.listen(PORT,()=>{
    console.log(`Server is running in PORT : ${PORT}`)
})

















































