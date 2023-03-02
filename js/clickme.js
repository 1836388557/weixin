function clickme() {
    let contain = document.getElementById("contain");
    let me = contain.getElementsByClassName("c_w")[0];
    let meInfo = me.getElementsByClassName("wo_info")[0];

    meInfo.onclick = function() {
        console.log(1)
        window.location.href = "./html/me.html";
    }

}