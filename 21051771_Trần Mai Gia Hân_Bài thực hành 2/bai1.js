function giaiPhuongTrinh() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;

    if (a == 0) {
        if (b == 0) {
            document.getElementById("result").innerHTML = "Phương trình vô số nghiệm";
        } else {
            document.getElementById("result").innerHTML = "Phương trình vô nghiệm";
        }
    } else {
        var x = -b / a;
        document.getElementById("result").innerHTML = "Nghiệm x = " + x;
    }
}
