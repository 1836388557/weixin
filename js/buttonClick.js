let addClass = function(obj, newClassName) { //obj为要操作的对象 newClassName为要添加的新类名
    return obj.className += " " + newClassName;
}

function btClick() {
    let bList = document.getElementById("b_list");
    let blistItems = bList.getElementsByTagName("div");
    let tList = document.getElementById("top");
    let tlistItems = tList.getElementsByTagName("div");
    let contain = document.getElementById("contain");
    let c_vx = contain.getElementsByClassName("c_vx")[0];
    let c_txl = contain.getElementsByClassName("c_txl")[0];
    let c_fx = contain.getElementsByClassName("c_fx")[0];
    let c_w = contain.getElementsByClassName("c_w")[0];
    let cArr = [];
    cArr.push(c_vx);
    cArr.push(c_txl);
    cArr.push(c_fx);
    cArr.push(c_w);


    for (let i = 0; i < blistItems.length; i++) {

        blistItems[i].onclick = function() {

            for (let j = 0; j < blistItems.length; j++) {
                tlistItems[j].style.display = "none";
                blistItems[j].classList.remove("b_active");
                cArr[j].style.display = "none";
            }
            addClass(blistItems[i], "b_active");
            tlistItems[i].style.display = "block";
            cArr[i].style.display = "block";
        }
    }
}