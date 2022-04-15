const login = ("login");
const password = ("password");
const usernameInput = document.getElementById("logData");
const passwordInput = document.getElementById("passData");

const check = () => {
    if (usernameInput.value === "" && passwordInput.value === "") {
        alert("Ошибка Валидации");
    } else if (usernameInput.value !== login) {
        alert("Неправильный username");
    } else if (passwordInput.value !== password) {
        alert("Неправильный пароль");
    } else {
        alert("Данные совпадают");
    }

};