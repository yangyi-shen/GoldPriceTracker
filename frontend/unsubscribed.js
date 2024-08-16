const unsubscribe = confirm('Are you sure you want to unsubscribe? 🥺')

const URL = 'http://localhost:6900'

if (unsubscribe) {
    const emailValue = prompt('Please enter your email.')

    if (emailValue) {
        // delete the email
        await fetch(`${URL}/email/delete?address=${emailValue}`, {
            method: 'DELETE'
        })

        alert('Unsubscribe successful.')
    } else {
        // close tab
        window.close()
    }
}