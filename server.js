const express = require('express')
const app = express()
const PORT = 8000

const dessert = {
    'cheesecake':{
        'name': 'cheesecake',
        'origin': 'netherlands',
        'color': 'cream'
    },
    'icecream':{
        'name': 'none',
        'origin': 'iceland',
        'color': 'cream'
    },
    'misc':{
        'name': 'unknown',
        'origin': 'nowhere',
        'color': 'pink'
    }

}

app.get('/', (request,response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:dessertName', (request,response)=>{
    const dessertName = request.params.dessertName.toLowerCase()
    if(dessert[dessertName]){
        response.json(dessert[dessertName])
    }else{
        response.json([dessert['misc']])
    }

})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on ${PORT}! You better go catch it!`)
})