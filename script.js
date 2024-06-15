// History page js

document.getElementById('history-btn').addEventListener('click', function() {
    toggleHistoryContent();
});

document.getElementById('back-btn').addEventListener('click', function() {
    toggleHistoryContent();
});

function toggleHistoryContent() {
    var historyContent = document.getElementById('history-content');
    if (historyContent.classList.contains('hidden')) {
        historyContent.classList.remove('hidden');
        historyContent.classList.add('visible');
    } else {
        historyContent.classList.remove('visible');
        historyContent.classList.add('hidden');
    }
}

// Example function to add to history - This should be called when a calculation is made
function addToHistory(calculations, result) {
    var historyContent = document.querySelector('.history-content-item');
    var newHistoryItem = document.createElement('p');
    newHistoryItem.textContent = `${calculations} = ${result}`;
    historyContent.appendChild(newHistoryItem);
}

// Calculation logic
let input = '';

let buttons = document.querySelectorAll('button');
const display = document.querySelector('.show-result');

// Initialize display to "0"
display.value = '0';

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const buttonValue = e.target.innerText;
        
        if (buttonValue === 'AC') {
            input = '';
            display.value = '0'; // Reset display to "0" when cleared
        } else if (buttonValue === '=') {
            if (input !== '') {
                let result = eval(input);
                display.value = result;
                addToHistory(input, result); // Pass both input and result to addToHistory
                input = ''; // Clear input after calculation
            }
        } else {
            if (display.value === '0') {
                input = buttonValue;
            } else {
                input += buttonValue;
            }
            display.value = input;
        }
    });
});



// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
