let age = prompt("Введите возраст:")

if (!(age >= 14 && age <= 90)) {
    console.log("Возраст НЕ находится в диапазоне 14 и 90 включительно.")
}
if (age < 14 || age > 90) {
    console.log("Возраст НЕ находится в диапазоне 14 и 90 включительно.")
} else {
    console.log("Возраст находится в диапазоне 14 и 90 включительно.")
}
