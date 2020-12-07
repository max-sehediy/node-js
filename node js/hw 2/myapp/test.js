const fs = require('fs')
let data = JSON.parse(fs.readFileSync('./public/data/photos.json'))
//     arr = []

// filter = data.filter(e => arr.push(e.title))
console.log(data[13].title);

// console.log(fs.readFileSync('./public/data/photos.js'));