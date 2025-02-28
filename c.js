function appendValue(value) {
    let display = document.getElementById('display');
    let lastChar = display.value.slice(-1);

    // Prevent multiple operators in a row
    if (['+', '-', '*', '/', '%'].includes(value) && ['+', '-', '*', '/', '%'].includes(lastChar)) {
        return;
    }

    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function backspace() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1); // Remove last character
}

function calculateResult() {
    let display = document.getElementById('display').value;
    try {
        // Convert percentages to division by 100
        display = display.replace(/(\d+)%/g, "($1/100)");

        document.getElementById('display').value = new Function('return ' + display)();
    } catch {
        document.getElementById('display').value = 'Error';
    }
}