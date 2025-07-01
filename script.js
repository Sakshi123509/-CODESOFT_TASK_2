const display = document.querySelector(".display");
let justCalculated = false;

display.value='0';

function appendvalue(value) {
    if (display.value === '0' || display.value === 'err' || justCalculated) {
        display.value = value;
        justCalculated = false; // reset the flag after typing
    } else {
        display.value += value;
    }
}

function cleardisplay() {
    display.value = '0';
    justCalculated = false;
}

function deletelast() {
    display.value = display.value.slice(0, -1);
    if (display.value === '') {
        display.value = '0';
    }
    justCalculated = false;
}

function calculate() {
    try {
        display.value = eval(display.value);
        justCalculated = true;  // set flag to true after result
    } catch (err) {
        display.value = 'err';
        justCalculated = true;
    }
}
