const dividers = () => {
    let number = prompt('Please enter number')
    for (let i = 0; i <= number; i++) {
        if (number % i === 0) {
            console.log('Divider:' + i);
        }
    }
}
dividers();