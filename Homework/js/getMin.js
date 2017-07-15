function getMin() {
    var a = arguments[0];
    var b;
    for (var i = 1; i < arguments.length; i++) {
        b = arguments[i];
        if (a > b) {
            a = b;
        }
    }
    console.log(a);
}