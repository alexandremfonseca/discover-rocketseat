// Manipulando a DOM

// getElementById() (Element)

const element1 = document.getElementById("blog-title")

// getElementByClassName() (HTMLCollection)

const element2 = document.getElementsByClassName("")

// getElementsByTagName() (HTMLCollection)

const element3 = document.getElementsByTagName("meta")

// querySelector() (Element)

const element4 = document.querySelector(".blog-title")

// querySelectorAll() (Node List)

const element5 = document.querySelectorAll("")

// Manipulação de Conteúdo

// textContent

const element6 = document.querySelector("h1")

element.textContent += " Olá Devs!"

console.log(element.textContent)

// innerText

const element7 = document.querySelector("h1")

element.innerText = "Olá Devs!"

// innerHTML

const element8 = document.querySelector("h1")

element.innerHTML = "Olá Devs! <small>!!!</small>" 

// value

const element9 = document.querySelector("input")

element.value = "Valor que eu quiser"

// Atributos

const header = document.querySelector("header")

header.setAttribute("id", "header")

const headerID = document.querySelector("#header")

console.log(headerID)

// Alterando Estilos

const element10 = document.querySelector("body")

element.style.backgroundColor = "#f9f3D2"

// classList

const element11 = document.querySelector("body")

element.classList.add("active", "green")

// Navegando pelos Elementos Pais

const element12 = document.querySelector("h1")

console.log(element.parentNode)

// Navegando pelos Elementos Filhos

const element13 = document.querySelector("body")

console.log(element.children)

// Navegando pelos Elementos Irmãos

const element14 = document.querySelector("body script")

// nextSibling e nextElementSibling

console.log(element.nextSibling)

console.log(element.nextElementSibling)

// previousSibling e previousElementSibling

console.log(element.previousSibling)

console.log(element.previousElementSibling)

// Criar e Adicionar Elementos

// createElement

const div = document.createElement("div")
div.innerText = "Olá Devs!"

// append prepend

const body1 = document.querySelector("body")

body1.append(div)
body1.prepend(div)

// insertBefore

const body2 = document.querySelector("body")
const script = document.querySelector("script")

body2.insertBefore(div, script)

// Eventos

const input = document.querySelector("input")

input.onkeydown = function() {
    console.log("rodei")
}

const h1 = document.querySelector("h1")

h1.addEventListener("mouseover", print)

function print() {
    console.log("print")
}

// Argumento event

const input = document.querySelector("input")

input.onkeydown = function (event) {
    console.log(event.currentTarget.value)
}