const task1 = () => {
    const n = prompt('Введите число от 0 до 9');
    switch (n) {
        case '0':
            alert('Вы ввели "ноль"');
            break;
        case '1':
            alert('Вы ввели "один"');
            break;
        case '2':
            alert('Вы ввели "два"');
            break;
        case '3':
            alert('Вы ввели "три"');
            break;
        case '4':
            alert('Вы ввели "четыре"');
            break;
        case '5':
            alert('Вы ввели "пять"');
            break;
        case '6':
            alert('Вы ввели "шесть"');
            break;
        case '7':
            alert('Вы ввели "семь"');
            break;
        case '8':
            alert('Вы ввели "восемь"');
            break;
        case '9':
            alert('Вы ввели "девять"');
            break;
        default:
            alert('Значение вне диапазона!');
    }
};

task1();