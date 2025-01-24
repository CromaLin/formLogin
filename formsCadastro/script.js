const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const passwordConfirmation = document.getElementById("passwordConfirmation")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkInputUsername();
})

function checkInputUsername() {
    const usernameValue = username.value;

    if (usernameValue === "") {
        ///mostrar o aviso e mostrar a mensagem de erro...
        errorInput(username, "Preencha um username!");
    }
}

function errorInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("p")

    textMessage.innerText = message;

    formItem.className = "form-content error"

}