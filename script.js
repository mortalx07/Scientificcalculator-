function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        let expression = document.getElementById('display').value;
        // Replace symbols for math.js
        expression = expression.replace(/sin/g, 'sin(').replace(/cos/g, 'cos(').replace(/tan/g, 'tan(').replace(/log/g, 'log(').replace(/\^/g, '^');
        expression = expression.replace(/π/g, 'pi');
        // Evaluate using math.js (AI-powered math library)
        const result = math.evaluate(expression);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = "Error";
    }
}