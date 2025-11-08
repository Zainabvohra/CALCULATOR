let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerText.trim();

        if (value === '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        } else if (value === 'AC') {
            string = "";
            document.querySelector('input').value = string;
        } else {
            string = string + value;
            document.querySelector('input').value = string;
        }
    });
});
