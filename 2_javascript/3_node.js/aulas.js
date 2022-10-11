// Variáveis Globais

// Diretório do Arquivo
console.log(__dirname)

// Caminho do Arquivo
console.log(__filename)

// Módulos Nativos do Node
const path = require("path")

console.log(path.basename(__filename))

// Módulos Pessoais
module.exports = "Enviando dados do meu módulo"

// Lista de Informações do Processo
const nodePath = process.argv[0]
const filePath = process.argv[1]

console.log(`O NodeJS está localizado em ${nodePath} e seu arquivo está localizado em ${filePath}`)

// Timeout e Interval

// setTimeout
const timeOut = 3000
const finished = () => console.log("Done!")

setTimeout(finished, timeOut)

// clearTimeout
let timer = setTimeout(finished, timeOut)

clearTimeout(timer)

// setInterval
const checking = () => console.log("Checking!")

setInterval(checking, timeOut)

// clearInterval
let interval = setInterval(checking, timeOut)

setTimeout(() => clearInterval(interval), 5000)

// Events
const {EventEmitter} = require("events")
const ev = new EventEmitter()

// Ouvindo Eventos
ev.on("saySomething", (message) => {
    console.log("Eu ouvi você,", message)
})

// Emitindo Eventos
ev.emit("saySomething", "Alexandre")
ev.emit("saySomething", "Alexandre")

// Herdando Características
function Character(name) {
    this.name = name
}

const {inherits} = require("util")
const {EventEmitter} = require("events")
const chapolin = new Character("Chapolin")

inherits(Character, EventEmitter)

console.log("Oh! E agora, quem poderá me defender?")
chapolin.emit("help")

chapolin.on("help", () => console.log(`Eu! O ${chapolin.name} Colorado!`))