import express from "express";
import connectDb from "./database/mongodb.js";
import route from "./routes/route.js";



const app = express();
const port = 4000;
 
app.use(express.json());
app.use(router);

connectDb();

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})