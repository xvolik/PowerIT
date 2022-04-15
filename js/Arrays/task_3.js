let styles = ["Джаз", "Блюз",];

const main = () => {
    const addRock = () => {
        styles.push("Рок-н-ролл");
        console.log(styles);
    };

    addRock();

    const midIndex = () => {
        let i = Math.ceil((styles.length - 1) / 2);
        styles[i] = "Классика";
        console.log(styles);
    };

    midIndex();

    const delFirst = () => {
        let firstElem = styles.shift();
        console.log(firstElem);
        console.log(styles);
    };

    delFirst();

    const addNewStyles = () => {
        styles.unshift("Рэп", "Регги");
        console.log(styles);
    };

    addNewStyles();
};

main();