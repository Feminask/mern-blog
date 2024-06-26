import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config();

mongoose.connect(process.env.MONGO).then(
    ()=>{console.log('Mongodb is connected');}
).catch(err=>{
    console.log(err);
})

const app =express();
const PORT=8007
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}... `);
})