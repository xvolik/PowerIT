const task2 = () => {
    const a = Number(prompt('Введите начало дипазона'));
    const b = Number(prompt('Введите конец дипазона'));
    const sum = 0;
    for (let i = a; i < b; i++) {
        if (i % 2 === 0) {
            console.log(i);
            sum += i;
        }
    }
    console.log(sum);
};

task2();