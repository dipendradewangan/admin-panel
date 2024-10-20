const express = require('express')

const app = express()

const port = 3000

app.listen(3000, (req, res)=>{
    console.log(`Server is running on the port : ${port}`)
})