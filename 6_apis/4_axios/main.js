const url = "http://localhost:5500/api"
const newUser = {
    "name": "Olivia Zars",
    "avatar": "https://picsum.photos/300/300",
    "city": "Rio de Janeiro"
}
const updatedUser = {
    "name": "Marcelo Calvis",
    "avatar": "https://picsum.photos/300/300",
    "city": "Recife"
}

function getUsers() {  
    axios.get(url)
    .then(response => {
        apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))
}

function addNewUser(newUser) {
    axios.post(url, newUser)
    .then(response => {
        console.log(response)
    })
    .catch(error => console.error(error))
}

function getUser(id) {
    axios.get(`${url}/${id}`)
    .then(response => {
        const data = response.data
        userID.textContent = data.id
        userName.textContent = data.name
        userCity.textContent = data.city
        userAvatar.src = data.avatar
    })
    .catch(error => console.error(error))
}

function updateUser(updatedUser, id) {
    axios.put(`${url}/${id}`, updatedUser)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

function deleteUser(id) {
    axios.delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(error => console.error(error))
}

getUsers()
getUser(1)
updateUser(updatedUser, 3)
// addNewUser(newUser)
// deleteUser(3)