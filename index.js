import express from 'express'
import dotenv  from 'dotenv'

// import user defined modules
import connectDB from './api/utils/db/index.js'


const app = express()


dotenv.config({
    path : './.env'
})

connectDB().then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running on port ${process.env.PORT || 8000}`)
    })
}).catch((error=>{
    console.log('Mongodb connection failed!!!', `${error}`)
}))
