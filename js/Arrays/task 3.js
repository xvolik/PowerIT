let styles = ["Джаз", "Блюз",];

function main() {
    function addRock() {
        styles.push("Рок-н-ролл");
        console.log(styles);
    }

    addRock();

    function midIndex() {
        let i = Math.ceil((styles.length - 1) / 2);
        styles[i] = "Классика";
        console.log(styles);
    }

    midIndex();

    function delFirst() {
        let firstElem = styles.shift();
        console.log(firstElem);
        console.log(styles);
    }

    delFirst();

    function addNewStyles() {
        styles.unshift("Рэп", "Регги");
        console.log(styles);
    }

    addNewStyles();
}

main();