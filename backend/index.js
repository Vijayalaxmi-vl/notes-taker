import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import DbCon from './config/db.js'
import AuthRoutes from './routes/Auth.js'
import NotesRoutes from './routes/Notes.js'

import path from "path"

import cookieParser from 'cookie-parser'
dotenv.config()
const PORT=process.env.PORT
const app=express()

const __dirname = path.resolve();

DbCon()

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'  // Replace with your frontend URL
}));
app.use(cookieParser())
app.use(express.json())
app.use('/auth',AuthRoutes)
app.use('/notes',NotesRoutes)

app.get('/',(req,res)=>{
    res.send('hello from backend')
})

if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname, "../frontend/dist")));

    app.get("*", (req,res) =>{
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
    })
}


app.listen(PORT,()=>{
    console.log(`App is ruuning on Port ${PORT}`)
})




