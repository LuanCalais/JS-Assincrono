// Promisses - Retorna imediatamente uma promessa de que no futuro irá trazer um valor para aquela informação
// Obs - Promisses tmb utilizam CallBack
// Vantagem Promisses - Código organizado, crescendo para baixo
// Desvantagem Promisses - 

const fs = require('fs')

// Promisses chamam duas funções - resolve(resolve promessa) e reject(Rejeita a promessa)
// Função que recebe o arquivo que quero ler e retorna uma Promise
const readFile = file => new Promise((resolve, reject) => {

    // Como observado utilizamos um callback --- (err, contents) 
    fs.readFile(file, (err, contents) => {
        // Se a callback retornar um erro, a promisse rejeita
        if(err){
            reject(err)

            // Se a callback não retornar um erro ela resolve
        }else{
            resolve(contents)
        }
    })
}) 

// Chamada usando a palava 'then'
readFile('es1.txt')
    .then(contents => {
        console.log(String(contents))
        return readFile('es2.txt')
    }).then(contents => {
        console.log(String(contents))
    })

console.log(1)
console.log(2)
console.log(3)
