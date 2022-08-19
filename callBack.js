// Funções assíncronas vizam não interromper a execussão do código enquanto alguma função é executada 
// callBack - Nos 'chama de volta' até a função assim que ela terminar de ser executada
// Desvantagem Callback - Código desorganizado crescendo para o lado, repetição de código

const log = (s1, s2) => {
    console.log(`${s1} ${s2}`)
}

// CallBack recebe um primeiro parâmetro de erro e os processamentos
const callBack = (err, contents) => {
    log(err, String(contents))
}

const fs = require('fs')

fs.readFile('es1.txt', callBack) 

log(1)
log(2)
log(3)
