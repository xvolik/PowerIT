const task1 = () => {
    const a = Number(prompt('Введите начало дипазона'));
    const b = Number(prompt('Введите конец дипазона'));

    let someArray = [];
    for (let i = a; i <= b; i++) {
        someArray.push(i);
    }
    for (let i = 0; i < someArray.length; i++) {
        console.log(someArray[i]);
    }
    for (let someArrayItem of someArray) {
        console.log(someArrayItem);
    }
    let i = 0;
    while (i < someArray.length) {
        console.log(someArray[i]);
        i++;
    }
    let x = 0;
    do {
        console.log(someArray[x]);
        x++;
    } while (x < someArray.length);
    for (let key in someArray) {
        console.log(someArray[key]);
    }
    someArray.forEach(element => console.log(element));
    someArray.map(function (x, i) {
        console.log(i, x)
    });
    someArray.reduce(function (previousValue, item) {
        console.log(item);
    }, 0)
};

task1();