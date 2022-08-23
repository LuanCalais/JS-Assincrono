// Async Await - É um "açúcar sintático", ou seja, é uma forma mais agradável, de representar uma promisse
// Vantagens - O código parece síncrono mas é assíncrono, mais fácil de dar manutenção

const fs = require('fs')

const readFile = file => new Promise((resolve, reject) => {

    fs.readFile(file, (err, contents) => {
        if(err){
            reject(err)
        }else{
            resolve(contents)
        }
    })
}) 

const init = async () => {
    try{
        const contents = await readFile('es1.txt')
        const contents2 = await readFile('es2.txt')
        
        console.log(String(contents))
        console.log(String(contents2))

        return `${String(contents) + String(contents2)}`

    }catch(err){
        console.log(`Ocorreu um erro ${err}`)
    }

}

init()
.then(contents => console.log(contents))

console.log(1)
console.log(2)
console.log(3)
