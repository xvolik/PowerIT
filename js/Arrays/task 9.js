const arr = [1, "a", 2, null, 3, undefined, 4, {}, 5, 6, `word`, 7, 8, false, 9, 100];
let result = arr.filter(item => typeof (item) === "number" && item <= 9 && item >= -9);
console.log(result);