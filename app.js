const express = require('express')
const Controller = require('./controllers/controller')
const app = express()
const port = 3000


app.set("view engine", "ejs")
app.use(express.urlencoded({extended : false}))

app.get('/home', Controller.Home)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// function generateSegitiga(number){
//     // console.log(toString);
    
//     let toString = `${number}`
//     let result = []
//     for (let i = 0; i < toString.length; i++) {
//         let temp = []
//         temp.push(toString[i])
//         let str = toString[i]
//         for (let j = 0; j < i; j++) {
//            temp.push('0')
//         }
//         // console.log(temp.join(''));
//         result.push(temp.join(''))
//     }
//     // console.log(result);
    
// }

// generateSegitiga(1345000)
