// let calc= require("./calc")

// let arg = process.argv.slice(2)

// let a = Number(arg[1])
// let b = Number(arg[2])
// let c = ''

// if(arg[0] ==="s"){
//   c = calc.soma(a, b) 
// }else if(arg[0]=== "m"){
//   c = calc.mult(a, b)
// }else {
//   c = "Ocorreu um errp"
// }

// console.log(c)
// criando arquivos no node

let fs = require('fs')

// fs.writeFile('tsteFile.txt', 'Hello world', function(err){
// if(err){ throw err}
// console.log("Arquivo criado com sucesso!")
// })

// modificando arquivo / incrementando algo 
// fs.appendFile('tsteFile.txt', ' - olá mundo!', function(err){
//   if(err){ throw err}
//   console.log("Arquivo modificado com sucesso!")
//   })
 
//apgando  arquivo
// fs.unlink('tsteFile.txt', function(err){
//   if(err){ throw err}
//   console.log("Arquivo apagado com sucesso!")
//   })

// renomeando arquivo
// fs.rename('novoNome','novoNome.txt', function(err){
//   if(err){ throw err}
//   console.log("Arquivo renomeado com sucesso!")
//   })

//lendo arquivo
// fs.readFile('novoNome.txt', 'UTF8', function(err,data){
//   if(err){ throw err}
//   console.log(data)
//   })