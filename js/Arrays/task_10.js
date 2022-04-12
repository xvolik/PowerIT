let arr = [8, 7, 2, 2, 3, 4, 2, 5, 5, 6, 7, 8, 5, 9, 0, 1];

function uniqueSorted() {
    arr.sort((a, b) => a - b);
    const unique = arr.filter((item, index) => {
        return arr.indexOf(item) === index
    });
    console.log(unique);
}

uniqueSorted();

function uniqueSortedSpread() {
    arr.sort((a, b) => a - b);
    const unique = [...new Set(arr)];
    console.log(unique);
}

uniqueSortedSpread();