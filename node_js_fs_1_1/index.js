const fs = require('fs');

// readFileSync = liest die datei blog1.txt aus

// const blog1Content = fs.readFileSync("blog1.txt");
// console.log(blog1Content.toString());

// fs.writeFileSync = ändert den text aus blog1.txt 

// fs.writeFileSync("blog1.txt", "Hallo, ajsdfakajshdfjk");
// console.log(blog1Content.toString());

// fs.writeFileSync("blog2.txt", "Hallo Welt");
// const blog2Contet = fs.readFileSync("blog2.txt");
// console.log(blog2Contet.toString());

// fs.mkdirSync = erstellt neuen ordner

const path = require("path");
const newFolder = "assets";

// fs.mkdirSync(path.join(__dirname, newFolder))


fs.mkdir(path.join(__dirname, newFolder), (err) => {
    if (err) {
        return console.log("Der angegebene Ordner existiert schon")
    }
    fs.rmdir(newFolder, (err) => {
        if (err) {
            return console.log("Ordner existiert nicht")
        }
        fs.writeFile("delete.txt", "Lösch mich", (err) => {
            if (err) {
                return console.log("datei existiert bereits")
            }
            fs.unlink('delete.txt', (err) => {
                if (err) {
                    return console.log("datei existiert nicht")
                }
                fs.rename('delete.txt', 'rename.txt', (err) => {
                    if (err) {
                        return console.log("datei existiert nicht")
                    }
                })
            })
        })
    })
})


