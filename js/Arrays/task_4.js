let arr = [];

function sumInputNumbers() {
    let x = parseFloat(prompt());
    if (x >= 0) {
        arr.push(x);
        console.log(arr);
        sumInputNumbers();
    }
}

sumInputNumbers();