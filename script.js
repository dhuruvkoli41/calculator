function appendToDisplay(value) {
    document.getElementById("display").value += value;
}
function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate() {
    try {
        let result = new Function('return ' + document.getElementById("display").value)();
        document.getElementById("display").value = result;
    } catch (e) {
        alert("Invalid Calculation");
        clearDisplay();
    }
}
