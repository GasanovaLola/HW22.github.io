var tempRange = document.getElementById("range").value;
var tempNum = document.getElementById("number").value;

var range;
var num;
var ost = 0;

setInterval(function() {
    range = +document.getElementById("range").value;
    num = +document.getElementById("number").value;

    if (tempRange !== range) {
        tempRange = range;

        document.getElementById('number').value = range;
    }
    else if (tempNum !== num) {
        tempNum = num;

        document.getElementById('range').value = num;
    }

    if (range < 20) {
        ost = 2;
    }
    else if (range >= 20 && range < 50) {
        ost = 4;
    }
    else if (range >= 50 && range < 75) {
        ost = 6;
    }
    else if (range >= 75 && range <= 100) {
        ost = 8;
    }      

    document.getElementById("block").innerHTML = `<div class="div" style="background: linear-gradient(to top, 
        green ${range-ost}%, red ${range-ost}% ${range}%, #FFF ${range}%);"></div>`;
}, 500);
