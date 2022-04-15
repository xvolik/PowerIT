const userName = prompt("Введите имя");

const ucFirst = (userName) => {
    if (!userName) return;
    return userName.charAt(0).toUpperCase() + userName.slice(1);
};

console.log(ucFirst(userName));