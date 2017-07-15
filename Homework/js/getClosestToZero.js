function getClosestToZero() {
    var a = arguments[0];
    var b = arguments[0];
    var c;
    for (var i = 0; i < arguments.length; i++) {
        c = arguments[i];
        if ((a > c) && (c > 0)) {
            a = c;
        }else if((b > Math.abs(c)) && (c < 0)){
            b = Math.abs(c);
        }
    }
    if (a < b) {
        console.log(a);
    } else {
        console.log(-b);
    }
}



getClosestToZero(9, 5, -6, -4, -5);