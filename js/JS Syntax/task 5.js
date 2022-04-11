const price = "$120";

function extractCurrencyValue() {
    return Number(price.slice(1));
}

console.log(extractCurrencyValue())