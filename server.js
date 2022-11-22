const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const PORT = 8000
require('dotenv').config()

app.listen(process.env.PORT || PORT, () => {
    console.log(`server running on port ${PORT}`)
})

let db,
    dbConnectionStr = process.env.DB_STRING,
    dbName = 'score'

MongoClient.connect(dbConnectionStr, {useUnifiedTopology: true})
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
    })  

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/', async (request, response)=>{
    const currentScore = await db.collection('score').find()
    response.render('index.ejs', {})
})

app.get('/api', (request, response)=>{
    let diceRollResOne = Math.floor(Math.random()*12)
    let diceRollResTwo = Math.floor(Math.random()*12)
    let productRoll = diceRollResOne*diceRollResTwo
    response.
})