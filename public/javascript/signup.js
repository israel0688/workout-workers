async function signupForm(event) {
    event.preventDefault();

    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if(name && email && username && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                name,
                email,
                username,
                password
            }),
            headers: {'Content-Type': 'application/json'}
        });
        if(response.ok) {
            console.log('correct');
            document.location.replace('/homepage');
        } else {
            alert(response.statusText);
        }
    }
}