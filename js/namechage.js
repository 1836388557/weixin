window.onload = function() {
    let inputs = document.getElementsByTagName("input");
    let inp = inputs[0];
    let bc = document.getElementById("bc");
    let a = false;

    inp.onchange = function() {
        bc.style.color = "white";
        bc.style.backgroundColor = "rgb(7,193,96)"
        a = !a;


    }
    inp.onclick = function() {
        inp.style.borderBottom = "1rem solid rgb(79,178,140)"
        inp.style.caretColor = "green";
        inp.style.outline = "none"
    }
    if (a = true) {
        bc.onclick = function() {
            bc.style.color = "rgb(180, 180, 180)";
            bc.style.backgroundColor = "rgb(225, 225, 225)"
            a = !a;
        }
    }
}