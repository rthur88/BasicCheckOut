function checkout(input) {
    const totalPriceDom = document.getElementById("demo");
    if (input === undefined || input === null) {

    }
}

function calculateTotal(input) {
    let total = 0.0;
    if (input === undefined || input === null)
        return total;
    for (inputPair in input) {
        total += inputPair.price * inputPair.quantity
    }
    return total;
};