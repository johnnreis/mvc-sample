const express = require('express')
const routers = require('./src/routes/person')
require('dotenv').config()

const app = express()
app.use(express.json())

app.use(routers)


app.listen(process.env.PORT, () => {
    console.log(`service running in port ${process.env.PORT}`)
})