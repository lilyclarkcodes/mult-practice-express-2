const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const PORT = 8000



let db,
    dbConnectionStr = '//put in the route',
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

app.listen(process.env.PORT || PORT, () => {
    console.log(`server running on port ${PORT}`)
})

app.get('/', (request, response)=>{
    db.collection('score').find()
    .then(data => {
        response.render('index.ejs', {info: score})
    })
    .catch(error => console.error(error))
})

app.get('/api', (request, response)=>{
    let diceRollResOne = Math.floor(Math.random()*12)
    let diceRollResTwo = Math.floor(Math.random()*12)
    let productRoll = diceRollResOne*diceRollResTwo
    response.
})

app.post('/updateScore', (request, response) => {
    db.collection('score').insertOne(request.body.score)
    .then(result => {
        console.log('New Score Recorded')
        response.redirect('/')
    .catch(error => console.error(error))
    })
})