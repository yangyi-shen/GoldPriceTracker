const emailForm = document.getElementById('email-form');
const emailInput = document.getElementById('email-input');
const errorMessage = document.getElementById('error-message')
const spamMessage = document.getElementById('spam-message')

errorMessage.style.display = 'none';
spamMessage.style.display = 'block';

const URL = 'http://localhost:6900'

emailForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const emailValue = emailInput.value.toLowerCase();
    const response = await fetch(`${URL}/email/save?address=${emailValue}`, {
        method: 'POST'
    })
        .then(response => response.json())

    if (response) {
        errorMessage.style.display = 'none';

        fetch('/frontend/registered.html')
            .then(response => response.text())
            .then(html => {
                document.write(html);
            })
    } else {
        errorMessage.style.display = 'block';
        spamMessage.style.display = 'none';
    }

    emailInput.value = '';
});