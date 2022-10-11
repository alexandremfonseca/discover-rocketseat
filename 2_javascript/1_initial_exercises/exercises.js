// Lista de Exercícios 1 de JavaScript

let weight

console.log(typeof weight)

let nome, age, stars, isSubscribed

nome = "Alexandre"
age = 23
weight = 95.5
isSubscribed = true

console.log(nome, age, stars, isSubscribed)

let student = {
    nome: "Alexandre",
    age: 23,
    weight: 95.5,
    isSubscribed: true
}

console.log(typeof student)
console.log(`${student.nome} de idade ${student.age} pesa ${student.weight} Kg.`)

let students = [
    student
]

console.log(students[0])

let john = {
    nome: "John",
    age: 35,
    weight: 78.6,
    isSubscribed: true
}

students[1] = john

console.log(students[1])

// Lista de Exercícios 2 de JavaScript

// Notas Escolares

function convertGrade(grade){
    let gradeA = grade >= 90 && grade <= 100
    let gradeB = grade < 90 && grade >= 80
    let gradeC = grade < 80 && grade >= 70
    let gradeD = grade < 70 && grade >= 60
    let gradeF = grade < 60 && grade >= 0

    if (gradeA) {
        grade = "A"
    } else if (gradeB) {
        grade = "B"
    } else if (gradeC) {
        grade = "C"
    } else if (gradeD) {
        grade = "D"
    } else if (gradeF) {
        grade = "F"
    } else {
        grade = "Nota inexistente!"
    }

    return grade
}

console.log(convertGrade(101))
console.log(convertGrade(90))
console.log(convertGrade(80))
console.log(convertGrade(70))
console.log(convertGrade(60))
console.log(convertGrade(50))

// Gastos Familiares

function sumArray(array) {

    let total = 0
    let i = 0

    while (array[i] != undefined) {
        total += array[i]
        i++
    }

    return total
}

function totalOutcome(income, expenses) {
    
    let total = income - expenses

    let positive = total >= 0

    if (positive){
        console.log(`Saldo POSITIVO de R$${total.toFixed(2)}`)
    } else {
        console.log(`Saldo NEGATIVO de R$${total.toFixed(2)}`)
    }
}

let financialBalance = {
    income: [2500, 3200, 250.43, 360.45],
    expenses: [320.34, 128.45, 176.87, 1450]
}

totalIncome = sumArray(financialBalance.income)
console.log(`Total de Receitas: R$${totalIncome}`)

totalExpenses = sumArray(financialBalance.expenses)
console.log(`Total de Despesas: R$${totalExpenses}`)

totalOutcome(totalIncome, totalExpenses)

// Celsius e Fahrenheit

function transformTemperature(temperature) {
    
    let temperatureSign
    let fahrenheitExists = temperature.includes("F")
    let celsiusExists = temperature.includes("C")
    
    if (fahrenheitExists) {
        temperatureSign = " C"
        temperature = (temperature.split("F")[0] - 32) * 5/9
    } else if (celsiusExists) {
        temperatureSign = " F"
        temperature = temperature.split("C")[0] * 9/5 + 32
    } else {
         throw new Error("Unidade de medida não identificada")
    }

    return (temperature + temperatureSign)
}

try {
    console.log(transformTemperature("212 F"))
    console.log(transformTemperature("100 C"))
    transformTemperature("200 Z")
} catch (error) {
    console.log(error.message)
}

// Biblioteca em Array

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
]

// Número de Categorias
let totalCategories = booksByCategory.length

console.log(`Total de Categorias: ${totalCategories}`)

// Número de Livros por Categoria
for (let category of booksByCategory) {
    console.log(`Total de Livros na Categoria "${category.category}": ${category.books.length}`)
}

// Número de Autores
function countAuthors(){
    let authors = []
    
    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (authors.indexOf(book.author) == -1) {
                authors.push(book.author)
            }    
        }
    }

    return authors.length
}

console.log(`Total de Autores: ${countAuthors()}`)

// Livros do Autor
let author = "Augusto Cury"

function showAuthorsBooks(author){
    let books = []
    
    for (let category of booksByCategory) {
        for (let book of category.books) {
            if (book.author == author) {
                books.push(book.title)
            }    
        }
    }

    return books
}

console.log(`Livros de ${author}: ${showAuthorsBooks(author).join(", ")}`)
