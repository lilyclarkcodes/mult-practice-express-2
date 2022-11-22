document.querySelector('#rollDice').addEventListener('click', makeReq)

async function makeReq() {
    const res = await fetch ('/api')
    const data = await res.json()

    console.log(data)
    document.querySelector('#diceRollResultOne').textContent = data.rollOne
    document.querySelector('#diceRollResultTwo').textContent = data.rollTwo
    document.querySelector('#product').textContent = `${data.rollOne} x ${data.rollTwo} = ${data.product}`
}