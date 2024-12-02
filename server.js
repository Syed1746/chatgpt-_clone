const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const colors = require('colors')
const cors = require('cors')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

dotenv.config();
//mongo connection
connectDB();


const app = express()

//middleware
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('dev'))

app.get('/', (req, res) => {
    console.log("get requrest server")
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`server is listening on port : ${process.env.PORT} and ${process.env.DEV_MODE}`)
})