let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

function handleKey(val) {
    if (val === '=') {
        string = eval(string);
        input.value = string;
        return;
    }

    if (val === 'AC') {
        string = "";
        input.value = string;
        return;
    }

    if (val === 'DEL') {
        string = string.substring(0, string.length - 1);
        input.value = string;
        return;
    }

    string += val;
    input.value = string;
}

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        handleKey(e.target.innerHTML);
    });
});

// Keyboard support
document.addEventListener('keydown', (e) => {
    // Prevent typing into the input and avoid unwanted default actions
    e.preventDefault();

    // Enter / =
    if (e.key === 'Enter' || e.key === '=') {
        handleKey('=');
        return;
    }

    // Escape / AC
    if (e.key === 'Escape') {
        handleKey('AC');
        return;
    }

    // Backspace / DEL
    if (e.key === 'Backspace') {
        handleKey('DEL');
        return;
    }

    // Digits and decimal point
    if (/^[0-9]$/.test(e.key) || e.key === '.') {
        handleKey(e.key);
        return;
    }

    // Operators
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        handleKey(e.key);
        return;
    }
});
