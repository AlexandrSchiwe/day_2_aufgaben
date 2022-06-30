const fs = require('fs');
const jsonData = require('./data.json');

// let data = fs.readFileSync('data.json');
// let readData = JSON.parse(data);

console.log(jsonData);

const jsonToString = jsonData.map((elt) => {
    return ` ${elt.id} - ${elt.title}
     ${elt.description}`
}).join("\n\n")

console.log(jsonToString);

fs.writeFile("newText.txt", jsonToString, (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
})


// 1 - Autopsy
// Suspendisse potenti.

// fs.readFile('data.json', (err, data) => {
//     if (err) {
//         return console.log("Daten nicht verfügbar")
//     } let readData = JSON.parse(data);
//     console.log(readData);
// })