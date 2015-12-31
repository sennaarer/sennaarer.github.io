var s = "Ishter kandai?";

function mirror_for() {
    for (var i = s.length; i >= 0; i--) {

        $('.container1').append(s.charAt(i));

        // more statements
    }
}
function mirror_for_pre() {
    for (var i = 0; i <= s.length; i++) {

        $('.container1').prepend(s.charAt(i));

        // more statements
    }
}

function mirror_do_while(){
    var i = s.length;
    do {
        i--;
        console.log(s.charAt(i));
    } while (i >= 0);

}

function mirror_while(){
    var n = s.length;
    while (n >= 0) {
        n--;
        console.log(s.charAt(n));
    }
}

function mirror_break() {
    var i = s.length;
    while (i <= s.length) {
        if (i == 0) {
            break;
        }
        i--;
        console.log(s.charAt(i));
    }
}

function magic(x) {
    return function calc(x) { return x * 42 };
}
var koboit = magic();
console.log(koboit(100));

$(document).ready(function(){
    mirror_for_pre();
    //mirror_do_while();
    //mirror_while();
    mirror_break();
});