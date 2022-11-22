const express = require('express')
const app = express ()
const PORT = 8000

app.listen(process.env.PORT || PORT, () => {
    console.log(`server running on port ${PORT}`)
})

app.use(express.static('public'))

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api', (request, response)=>{
    let diceRollResOne = Math.floor(Math.random()*12)
    let diceRollResTwo = Math.floor(Math.random()*12)
    let productRoll = diceRollResOne*diceRollResTwo
})