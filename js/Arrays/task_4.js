let arr = [];

let inputNumbers = () => {
    let x = parseFloat(prompt());
    if (x >= 0) {
        arr.push(x);
        console.log(arr);
        inputNumbers();
    }
};
inputNumbers();
let sumInputNumbers = arr.reduce((previousValue, item) => item + previousValue, 0);
console.log(sumInputNumbers);