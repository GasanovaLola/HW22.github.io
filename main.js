let range = document.getElementById("range");
let number = document.getElementById("number");
let div = document.getElementById("block");

let ost;


range.addEventListener('change', (event) => {
    number.value = event.target.value;

    ost = Commission(range.value);
    Column(number.value);
});

number.addEventListener('input', (event) => {
    range.value = event.target.value;

    ost = Commission(range.value);
    Column(range.value, ost);
});

function Column(range) {
    div.innerHTML = `<div class="div" style="background: linear-gradient(to top, 
        green ${range - ost}%, red ${range - ost}% ${range}%, #FFF ${range}%);"></div>`;
};

function Commission(range) {
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
    
    return ost;
}
