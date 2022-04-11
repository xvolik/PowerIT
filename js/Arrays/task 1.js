function task2() {
    const a = Number(prompt('Введите начало дипазона'));
    const b = Number(prompt('Введите конец дипазона'));

    let someArray = [];
    for (let i = a; i <= b; i++) {
        someArray.push(i);
    }
    //Цикл for
    for (let i = 0; i < someArray.length; i++) {
        console.log(someArray[i]);
    }
    // Цикл for of
    for (let someArrayItem of someArray) {
        console.log(someArrayItem);
    }
    // Цикл while
    let i = 0;
    while (i < someArray.length) {
        console.log(someArray[i]);
        i++;
    }
    // Цикл do ... while
    let x = 0;
    do {
        console.log(someArray[x]);
        x++;
    } while (x < someArray.length);
    //Цикл for in
    for (let key in someArray) {
        console.log(someArray[key]);
    }
    // Цикл forEach
    someArray.forEach(element => console.log(element));
    //
    // .map
    someArray.map(function (x, i) {
        console.log(i, x)
    });
    //
    // .reduce
    someArray.reduce(function (previousValue, item) {
        console.log(item);
    }, 0)
}

task2();