// Object

const person = {
    nome: "John",
    age: 30,
    weight: 88.6,
    isAdmin: true
}

console.log(`O ${person.nome} tem ${person.age} anos`)

// Arrays

const animals = [
    "Lion",
    "Monkey",
    "Cat"
]

console.log(animals[0])
console.log(animals.length)

// Escopo
{
    let x = 0
    console.log(x)
}

// Variáveis
var clima = "Quente" // var é global e local
console.log(clima)

let idade = "23" // let e const são locais, ou seja, funcionam apenas dentro de seu escopo
console.log(idade)

const nome = "Alexandre" // const não pode ser alterada
console.log(nome)

// Data type
console.log(typeof nome)

// Variable grouping
let age, isHuman

age = 23
isHuman = true

// Multiple function arguments
console.log(nome, age, isHuman)

// Text and variables mix
console.log("O " + nome + " tem " + age + " anos")

// Text and variables interpolation
console.log(`O ${nome} tem ${age} anos`)

// Functions

// Function statement
function createPhrases() {
    console.log("Estudar é muito bom")
    console.log("Paciência e persistência")
    console.log("Revisão é a mãe do aprendizado")    
}

// Function execution
createPhrases()

// Function expression and parameters
const sum = function(number1, number2) {
    return number1 + number2
}

let number1 = 34
let number2 = 25

console.log(`O número 1 é ${number1}`)
console.log(`O número 2 é ${number2}`)
console.log(`A soma é ${sum(number1, number2)}`)

// Function scope

let subject = "Create video"

function createThought(subject) {
    subject = "Study"
    return subject
}

console.log(subject)
console.log(createThought(subject))

// Function hoisting

sayMyName()

function sayMyName() {
    console.log("Alexandre")
}

// Arrow function

const sayMyName = (nome) => {
    console.log(nome)
}

sayMyName("Alexandre")

// Callback function

function sayMyName(name) {
    name()
}

sayMyName(
    () => {
        console.log("Estou em uma callback")
    }
)

// Constructor function

function Person(nome, age) {
    this.nome = nome
    this.age = age
}

const alexandre = new Person("Alexandre", 23)
const joao = new Person ("João", 56)

console.log(alexandre)
console.log(joao)

// Manipulação de Dados

// String to Number
let string = "123"
console.log(Number(string))

// Number to String
let number = 321
console.log(String(number))

// String Length
let word = "Paralelepípedo"
console.log(word.length)

// Number Length
let number12 = 1234
console.log(String(number1).length)

// Decimal Numbers (. -> ,)
let number22 = 435312345.33452345
console.log(number2.toFixed(2).replace(".", ","))

// Lowercase and Uppercase 

let word1 = "Programar é muito bacana!"
console.log(word1.toLowerCase())
console.log(word1.toUpperCase())

// Word Verifier
let phrase = "Eu quero viver o Amor!"
console.log(phrase.includes("Amor"))

// Strings and Arrays

let phrase1 = "Eu quero viver o Amor!"
let myArray = phrase.split(" ")
let phraseWithUnderscore = myArray.join("_")

console.log(myArray)
console.log(phraseWithUnderscore)

// Arrays with Constructor

let myArray1 = new Array("a", "b", "c")
console.log(myArray)

let techs = ["html", "css", "js"]

// Adicionar elemento no final
techs.push("nodejs")

// Adicionar elemento no início
techs.unshift("sql")

// Remover elemento do final
techs.pop()

// Remover elemento do início
techs.shift()

// Selecionar alguns elementos
console.log(techs.slice(1,3))

// Remover elementos em qualquer posição
techs.splice(1,1)

// Encontrar a posição do elemento
let index = techs.indexOf("css")

console.log(index)
console.log(techs)

// Operadores Matemáticos

// Multiplicação
console.log(3.2 * 5.5)

// Divisão
console.log(12 / 2)

// Soma
console.log(34 + 67)

// Subtração
console.log(34 - 23)

// Resto da divisão
console.log(11 % 10)

// Incremento
let i = 0
console.log(++i)

// Decremento
let d = 0
console.log(--d)

// Potência
console.log(3 ** 3)

// Operadores de Comparação

let one = 1
let two = 2

// Igual a
console.log(two == 1)
console.log(one == "1")

// Diferente de
console.log(one != two)
console.log(one != 1)
console.log(one != "1")

// Estritamente igual a
console.log(one === "1")
console.log(one === 1)

// Estritamente diferente de
console.log(two !== "2")
console.log(two !== 2)

// Maior que
console.log(one > two)

// Maior igual a
console.log(one >= 1)

// Menor que
console.log(one < two)

// Menor igual a
console.log(one <= two)

// Operadores de Atribuição

let x

// Assignment
x = 1

// Addition Assignment
x += 2

// Subtraction Assignment
x -= 1

// Multiplication Assignment
x *= 2

// Division Assignment
x /= 2

// Remainder and Power
x %= 2
x **= 2

// Operadores Lógicos

let pao = true
let queijo = false

// and
console.log(pao && queijo)

// or
console.log(pao || queijo)

// not
console.log(!pao)

// Operador Condicional

// Exemplo 1
let pao1 = false
let queijo1 = false
const niceBreakfast = pao || queijo ? "Café top" : "Café ruim"

console.log(niceBreakfast)

// Exemplo 2
let age1 = 18
const canDrive = age >= 18 ? "Can drive" : "Can't drive"

console.log(canDrive)

// if ... else

let temperature = 36
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if (highTemperature) {
    console.log("Febre alta!")
} else if (mediumTemperature) {
    console.log("Febre moderada!")
} else {
    console.log("Saudável")
}

// switch

function calculate(number1, operator, number2) {
    let result = 0

    switch(operator) {
        case "+":
            result = number1 + number2
            break
        case "-":
            result = number1 - number2
            break
        case "*":
            result = number1 * number2
            break
        case "/":
            result = number1 / number2
            break
        default:
            console.log("Não implementado!")
            break
    }

    return result
}

console.log(calculate(4, "%", 8))

// throw && try ... catch

function sayMyName(name) {
    if(name === "") {
        throw "Nome é necessário!"
    }

    console.log("Depois do erro!")
}

try {
    sayMyName("")
} catch (e) {
    console.log(e)
}

// Estruturas de Repetição

// for
for (let i = 10; i > 0; i--){
    if(i === 5){
        continue
    }

    console.log(i)
}

// while
let w = 0

while (i <= 10) {
    console.log(i)
    i++
}

// for ... of

let nome2 = "Alexandre"
let names = ["João", "Paulo", "Pedro"]

for (let nome of names) {
    console.log(nome)
}

// for ... in

let person1 = {
    nome: "Alexandre",
    age: 23,
    weight: 100
}

for (let property in person) {
    console.log(property)
}
