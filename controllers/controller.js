const Model = require("../models/model");

class Controller{
    static  Home (req, res) {
        if(req.query.ganjil){
            if(req.query.angka % 2 !== 0){
                let data = 'Angka Ganjil'
                res.render("home",data)
            }
        }
        
    }
}

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

module.exports = Controller