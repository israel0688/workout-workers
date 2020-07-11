
// sign up
async function signupFormHandler(event) {
    event.preventDefault();

    // const employer = document.querySelector('#employer-signup');
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (name && email && password) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          name,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      // check the response status
      if (response.ok) {
        console.log('success');
      
        document.location.replace('/userprofile', { name });
    
      } else {
        alert(response.statusText);
      }
    }
  }
  
  var signup = document.getElementById('signup-submit');
  if(signup){
  signup.addEventListener('click', signupFormHandler);
  };

//   login
  async function loginFormHandler(event) {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          name,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await response.json();
      console.log(response);
      console.log(name);
  
      if (response.ok) {
        document.location.replace('/userprofile/' + data.user.id);
      } else {
        alert(response.statusText);
      }
    }
  }
  
  var login = document.getElementById('login-submit');
  if(login){
  login.addEventListener('click', loginFormHandler);
  };
  