//1) Reusing of the isBigger funcion

function isBigger(a, b) {
    return a > b;
}

function isSmaller(a, b) {
    return !isBigger(a, b);
}

//2) Or without reusing of the isBigger function

function isSmaller(a, b) {
    return a < b;
}

