const price = "$120";

const extractCurrencyValue = () => {
    return Number(price.slice(1));
};

console.log(extractCurrencyValue());