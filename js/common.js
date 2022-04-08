// JS Syntax

// Задача №1 - условный оператор
// Переменная n хранит целое число от 0 до 9.
// Используя оператор switch, написать скрипт,который в зависимости от числа будет выводить слово
// (Например, если n равно 3, то будет выводиться слово «три»)
// function task1() {
//     let n = prompt('Введите число от 0 до 9');
//     switch (n) {
//         case '0':
//             alert('Вы ввели "ноль"');
//             break;
//         case '1':
//             alert('Вы ввели "один"');
//             break;
//         case '2':
//             alert('Вы ввели "два"');
//             break;
//         case '3':
//             alert('Вы ввели "три"');
//             break;
//         case '4':
//             alert('Вы ввели "четыре"');
//             break;
//         case '5':
//             alert('Вы ввели "пять"');
//             break;
//         case '6':
//             alert('Вы ввели "шесть"');
//             break;
//         case '7':
//             alert('Вы ввели "семь"');
//             break;
//         case '8':
//             alert('Вы ввели "восемь"');
//             break;
//         case '9':
//             alert('Вы ввели "девять"');
//             break;
//         default:
//             alert('Значение вне диапазона!');
//             break;
//     }
// }
// task1();

//Задача №2 - циклы
//Напишите код который посчитает и выведет в консоль сумму четных чисел из интервала [a, b]
// function task2 () {
// const a = Number(prompt('Введите начало дипазона'));
// const b = Number(prompt('Введите конец дипазона'));
// let sum = 0;
// for (let i=a; i <=b; i++){
//     if(i%2 == 0) {
//         console.log(i);
//         sum += i;
//     }
// }
// console.log(sum);
// };
// task2();

// Задача №3 - условный оператор
// Написать код который определит наибольшее и наименьшее число из a, b, c и выведет на экран соответствующее сообщение.
//     PS: попробуйте решить эту задачу одной строчки кода (сравнение и вывод)
// const a = Number(prompt('Введите a'));
// const b = Number(prompt('Введите b'));
// const c = Number(prompt('Введите c'));
// console.log(Math.max(a,b,c), Math.min(a,b,c));

//  Задача №4 - функции
// // Напишите функцию ucFirst(str), которая возвращает строку str с заглавным первым символом. Например:
// ucFirst("вася") == "Вася";
// const UserName = prompt("Введите имя");
//
// function ucFirst(UserName) {
//     if (!UserName) return;
//     return UserName.charAt(0).toUpperCase() + UserName.slice(1);
// }
// console.log(ucFirst(UserName));

// Задача №5 - строки
// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
//     Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.
//     Например:
// alert( extractCurrencyValue('$120') === 120 ); // true
// const str = "$" + prompt("Введите число");
// function extractCurrencyValue() {
//     return Number(str.slice(1));
// }
// console.log(extractCurrencyValue(str));
// console.log(typeof (extractCurrencyValue(str)));

// Задача №6 - условный оператор
// Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:
//
//     1, если значение больше нуля,
//     -1, если значение меньше нуля,
//     0, если значение равно нулю.
//     Error, если введено не число
// const x = prompt("Введите число")
// if (x>0) {
//     alert("1");
// }else if (x<0) {
//     alert("-1");
// }else if (x==0){
//     alert("0");
// }else {
//     alert("Error");
// }

// Задача №7 - условный оператор
// Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.
//     Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.
// if (!(age >= 14 && age <= 90));
// if (age < 14 || age > 90);

// Задача №8 - условный оператор
// Напишите код который проверит правильность username и password и выводит следующие сообщения:
//     Привет, если совпадает username и password
// Неправильный пароль если username введен правильно а пароль нет
// Неправильный username, если введен неправильный username
// Ошибка Валидации, если ничего не введено
// PS: На практике не делать такое никогда (писать пользователю что он ввел неверно, username или password)
// const x = ("login");
// const y = ("password");
// const usernameinput = document.getElementById("logdata");
// const passwordinput = document.getElementById("passdata");
//
// function check() {
//     if (usernameinput.value === "" && passwordinput.value === "") {
//         alert("Ошибка Валидации");
//     } else if (usernameinput.value !== x) {
//             alert("Неправильный username");
//         } else if (passwordinput.value !== y) {
//             alert("Неправильный пароль");
//         } else {
//         alert("Данные совпадают");
//     }
// }
// function check2() {
//     console.log(usernameinput.value);
//     console.log(passwordinput.value);
// }

// Задача №9 - взаимодействие с пользователем
// Напишите код который при открытии страницы запросит у пользователя его имя(prompt). После ввода имени, вывести ему сообщение `Привет ${name}`.
//     Спросить у пользователя если он знаком с языком JavaScript(confirm) и вывести `Молодец`,
//     если его ответ Да и сообщение `Можно начать изучение прямо сейчас`, если его ответ Нет.
// function question () {
//     const name = prompt("Как вас зовут?");
//     alert(`Привет ${name}`);
//     let wannajs = confirm("Ты знаком с JavaScript?");
//     if (wannajs == true){
//         alert("Молодец!")
//     }else {
//         alert("Можно начать изучение прямо сейчас!");
//     }
// }
// question();

// Задача №10 - условный оператор и циклы
// Напишите функцию которая определяет и выводит в консоль все делитель заданного числа.
//     const dividers = (number) => {
// }
// let number = prompt('Please enter number');
//
// for (let i = 0; i <= number; i++) {
//     if (number % i === 0) {
//         console.log('Divider:' + i);
//     }
// }
// const dividers = () => {
//     let number = prompt('Please enter number')
// for (let i = 0; i <= number; i++) {
//     if (number % i === 0) {
//         console.log('Divider:' + i);
//     }
// }
// }
// dividers();

// Arrays

// Задача №1 - вывод массива
// Создайте массив из n чисел и выводите его в консоль 5 разными способами:
//     for, while, do … while
// for in
//     for of
//         forEach
// map
// В конце кода, пишите в комментарии свое мнение какой из способов лучше. Найдите еще один способ вывода массива.
// function task2() {
//     const a = Number(prompt('Введите начало дипазона'));
//     const b = Number(prompt('Введите конец дипазона'));
//
//     let sum = [];
//     for (let i = a; i <= b; i++) {
//         sum.push(i);
//     }
//     // console.log(sum);
//     // console.log(sum.length);
//
//     //Цикл for
//     for (let i = 0; i < sum.length; i++) {
//         console.log(sum[i]);
//     }
//     // Цикл for of
//     for ( let sumItem of sum) {
//         console.log(sumItem);
//     }
//     // Цикл while
//     let i = 0;
//     while (i < sum.length) {
//         console.log(sum[i]);
//         i++;
//     }
//     // Цикл do ... while
//     let x = 0;
//     do {
//         console.log(sum[x]);
//         x++;
//     } while (x < sum.length);
//     //Цикл for in
//     for (let key in sum) {
//         console.log(sum[key]);
//     }
//     // Цикл forEach
//     sum.forEach(element => console.log(element));
//     //
//     // .map
//     let summap = sum.map(function (x,i) {
//         console.log(i, x)
//     });
//     //
//     // .reduce
//     const newsum = sum.reduce(function (previousValue , item) {
//         console.log(item);
//     },0)
// }
// task2();

// Задача №2 - обработка массива
// Создать массив который содержит минимум 5 учеников  (алгоритм должен работать для любого количества учеников) и их оценки (минимум 4 оценки)
//
// [
//     {
//         name: “First”,
// marks: [8, 10, 7, 5, 4]
// }
// ]
//
// Написать следующие функции обработки этого массива:
//     считает среднюю оценку и выводит имя и среднюю оценку для каждого элемента массива +
// выводит учеников со у которых средняя оценка < 5 +
// находит учеников с максимальной и минимальной оценкой +
// сортирует учеников по средней оценке по убыванию (с самой большой средней в начале, с наименьшим в конце списка)+
// выводит тех учеников чья средняя оценка больше средней оценки всего класса +
//
// let students = [
//      {
//         name: "Alex",
//         marks: [8, 10, 7, 5, 4],
//     },
//     {
//         name: "Serghei",
//         marks: [9, 10, 7, 7, 10],
//     },
//     {
//         name: "Marina",
//         marks: [6, 9, 4, 5, 10],
//     },
//     {
//         name: "Ruslan",
//         marks: [9, 10, 10, 8, 10],
//     },
//      {
//         name: "Maxim",
//         marks: [5, 4, 6, 3, 2],
//     },
// ];
// let classMedia = [];
// let studentsList = [];
// let lessFiveList = [];
// function mainFunc () {
// students.forEach(function (item) {
//     let result = item.marks.reduce((sum, current) => sum + current, 0);
//     let media = result / item.marks.length;
//     item['media'] = media;
//     classMedia.push(media);
//     studentsList.push(item.name +': '+ media);
//     });
//
// // console.log(studentsList);
// //
// //     let xo = classMedia.reduce ((sum, current) => sum + current, 0);
// //     let resultXo = xo / classMedia.length;
// //     console.log("Общий средний балл : " + resultXo );
//     // function sortByMedia(x, y) {
//     //     return y['media'] - x['media']
//     // }
//     // console.log(students.sort(sortByMedia));
//     // console.log('Наивысший балл: ' + students[0].name + ' ' + students[0].media);
//     // console.log('Наименьший балл: ' + students[students.length - 1].name + ' ' + students[students.length - 1].media);
//     // console.log(classMedia);
//     // const bests = students.filter(student =>{
//     //     if (student.media >= resultXo) {
//     //         return true
//     //     }
//     // })
//     // let i = 0;
//     // while (i < bests.length) {
//     //     console.log("Топ класса\n" + bests[i].name +': '+ bests[i].media);
//     //     i++;
//     // }
//
//     function showStudentList() {
//         console.log("Имя и средний балл студентов: ");
//         let i = 0;
//         while (i < studentsList.length){
//             console.log(studentsList[i])
//             i++
//         }
//     }
//     showStudentList();
//
//     function lessFive() {
//         console.log("Список студентов с оценкой ниже 5: ");
//         let i = 0;
//         while (i < lessFiveList.length){
//             console.log(lessFiveList[i]);
//             i++
//     }
//         //случайно сделал еще раз фильтр оценки ниже 5 ((((
//         // console.log("Список студентов с оценкой ниже 5: ");
//         // let i = 0;
//         // while (i < students.length){
//         //     if (students[i].media < 5) {
//         //         console.log(students[i].name + ' ' + students[i].media);
//         //     }
//         //     i++
//         // }
//     }
//     lessFive();
//
//     function highLow() {
//         console.log('Наивысший балл: ' + students[0].name + ' ' + students[0].media);
//         console.log('Наименьший балл: ' + students[students.length - 1].name + ' ' + students[students.length - 1].media);
//     }
//     highLow()
//
//     function sortByMedia() {
//         function sorter(x, y) {
//             return y['media'] - x['media']
//         }
//         students.sort(sorter)
//         console.log("Сортировка по убыванию :");
//         students.forEach(element => console.log(element.name + " " + element.media));
//     }
//     sortByMedia();
//
//     function topStudents() {
//             let classMediaSumm = classMedia.reduce ((sum, current) => sum + current, 0);
//             let commonMedia = classMediaSumm / classMedia.length;
//         const bests = students.filter(student =>{
//             if (student.media >= commonMedia) {
//                 return true
//             }
//         })
//         console.log("Топ класса:")
//         let i = 0;
//         while (i < bests.length) {
//             console.log(bests[i].name +': '+ bests[i].media);
//             i++;
//         }
//     }
//     topStudents();
// }
//
// mainFunc();
//

// Задача №3 - обработка массива
// Создать массив и произвести над ним следующие 5 операций:
//
//     Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
//     Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
//     Удалите первый элемент массива и покажите его.
//     Вставьте «Рэп» и «Регги» в начало массива.
//
//     Массив по ходу выполнения операций:
//
//     Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл
//
// let styles = ["Джаз", "Блюз",];
//
// function main() {
//     function addRock() {
//         styles.push("Рок-н-ролл");
//         console.log(styles);
//     }
//
//     addRock();
//
//     function midIndex() {
//         let i = Math.ceil((styles.length - 1) / 2);
//         styles[i] = "Классика";
//         console.log(styles);
//     }
//
//     midIndex();
//
//     function delFirst() {
//         let firstElem = styles.shift();
//         console.log(firstElem);
//         console.log(styles);
//     }
//
//     delFirst();
//
//     function addNewStyles() {
//         styles.unshift("Рэп", "Регги");
//         console.log(styles);
//     }
//
//     addNewStyles();
// }
//
// main();

// Задача №4 - обработка массива
// Напишите функцию sumInputNumbers(), которая:
//
// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
//     Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
//     P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
// let arr = [];
// function sumInputNumbers() {
//     let x = parseFloat(prompt());
//     if (x >= 0){
//         arr.push(x);
//         console.log(arr);
//         sumInputNumbers();
//     }
// }
// sumInputNumbers();

// Задача №5 - стрелочные функции обработки массивов
// Напиши функцию convert(fn, array), которая принимает на вход функцию и массив,
// и обрабатывает каждый элемент массива этой функцией, возвращая новый массив.
// Пример:
// function square(x) { return x * x; } // возведение в квадрат
// console.log(convert(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
// console.log(convert(square, [])); // []
// Обрати внимание: функция не должна изменять переданный ей массив:
//
//     let arr = [1, 2, 3];
// console.log(convert(square, arr)); // [1, 4, 9]
// console.log(arr); // [1, 2, 3]
//
// let arr = [1, 2, 3];
// let result = arr.map(item => item * item);
// console.log(arr);
// console.log(result);

// Задача №6 - функции обработки массивов
// Задан массив [1, 2, 3, 4, 5, 6, 7, 8, 9].
// Используя одну функцию обработки массивов,
// из исходного массива нужно получить [1, 2, 3, 4, 0, 0, 0, 6, 7, 8, 9]
//
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// arr.splice(4,1, 0, 0, 0);
// console.log(arr);

// Задача №7 - функции обработки массивов
// Задан массив [1, 2, 3, 4, 5, 6, 7, 8, 9].
// Написать функцию которая возвращает элементы этого массива, начиная с позиции start по позиции end.
//
// extract(2, 4) вернет [3, 4, 5]
//
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let result = arr.slice(2, 5);
// console.log(result);

// Задача №8 - функции обработки массивов
// Задан массив
// const colors = [“red”, “green”, “blue”];
// Написать функцию
// checkColor(color)
// которая вернет позицию цвета в массиве если она есть или -1 если цвета нет.
//
// const colors = ["red", "green", "blue"];
//
// function checkColor(color) {
//     console.log(colors.indexOf("red"));
// }
//
// checkColor(colors);

// Задача №9 - функции обработки массивов
// Задан массив [1, “a”, 2, null, 3, undefined, 4, {}, 5, 6, `word`, 7, 8, false, 9, 100]
// Напишите функцию filter которая удалить лишнее из массива (все что не является цифрой) и вернет чистый массив [1, 2,  3, 4, 5, 6, 7, 8, 9]
//
// const arr = [1, "a", 2, null, 3, undefined, 4, {}, 5, 6, `word`, 7, 8, false, 9, 100, -100];
// let result = arr.filter(item => typeof (item) === "number" && item <= 9 && item >= -9);
// console.log(result);

// Задача №10 - функции обработки массивов
// Задан массив [8, 7,  2,  2,  3, 4, 2,  5, 5, 6, 7, 8, 5, 9, 0, 1]
// Напишите функцию uniqueSorted, которая удалит дубликаты из массива и вернет отсортированный по возрастанию массив из уникальных значений
//     [0, 1, 2,  3, 4, 5, 6, 7, 8, 9]
//
// let arr = [8, 7, 2, 2, 3, 4, 2, 5, 5, 6, 7, 8, 5, 9, 0, 1];
//
// function uniqueSorted() {
//     arr.sort((a, b) => a - b);
//     const unique = arr.filter((item, index) => {
//         return arr.indexOf(item) === index
//     });
//     console.log(unique);
// }
//
// uniqueSorted();
//
// function uniqueSortedSpread() {
//     arr.sort((a, b) => a - b);
//     const unique = [...new Set(arr)];
//     console.log(unique);
// }
//
// uniqueSortedSpread();
