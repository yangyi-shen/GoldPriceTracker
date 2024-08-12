const emailForm = document.getElementById('email-form');
const emailInput = document.getElementById('email-input');

const URL = 'http://localhost:6900'

emailForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const emailValue = emailInput.value;
    await fetch(`${URL}/email/save?address=${emailValue}`, {
        method: 'POST'
    })

    emailInput.value = '';
});