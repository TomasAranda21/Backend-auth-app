import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js';
import authRouter from './routes/authRoute.js'

const app = express();


app.use(express.json()) 

dotenv.config()

connectDB()



app.use('/', authRouter)


const PORT = process.env.PORT || 4000



app.listen(PORT, () => {

    console.log("Hello")

})