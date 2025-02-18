const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const passwordConfirmation = document.getElementById("passwordConfirmation")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkForm();
})

username.addEventListener("blur", () => {
    checkInputUsername();
})

email.addEventListener("blur", () => {
    checkInputEmail();
})

password.addEventListener("blur", () => {
    checkInputPassword();
})

function checkInputUsername() {
    const usernameValue = username.value;

    if (usernameValue === "") {
        ///mostrar o aviso e mostrar a mensagem de erro...
        errorInput(username, "Preencha um username!");
    } else {
        const formItem = username.parentElement;
        ///tira o aviso
        formItem.className = "form-content"
    }
}

function checkInputEmail() {
    const emailValue = email.value;

    if (emailValue === "") {
        errorInput(email, "O email é obrigatório")
    } else {
        const formItem = email.parentElement;
        formItem.className = "form-content"
    }

}

function checkInputPassword() {
    const passwordValue = password.value;

    if (passwordValue === "") {
        errorInput(password, "A senha é obrigatória.")
    } else if (passwordValue.length < 8) {
        errorInput(password, "A senha deve ter no mínimo 8 caracteres.")
    } else {
        const formItem = password.parentElement;
        formItem.className = "form-content"
    }

}

function checkInputConfirmation() {
    const passwordValue = password.value;
    const confirmationvalue = passwordConfirmation.value;

    if (confirmationvalue != passwordValue) {
        errorInput(passwordConfirmation, "As senha devem ser as mesmas");
    } else {
        const formItem = passwordConfirmation.parentElement;
        formItem.className = "form-content"
    }
}

function checkForm() {
    checkInputUsername();
    checkInputEmail();
    checkInputPassword();
    checkInputConfirmation();

    const formItems = form.querySelectorAll(".form-content")
    const isValid = [...formItems].every((item) => {
        return item.className === "form-content"
    });

    if (isValid) {
        alert("Cadastrado com sucesso!");
    }

}

function errorInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("p")

    textMessage.innerText = message;

    formItem.className = "form-content error"

}
