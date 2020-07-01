// // sign up
// async function signupFormHandler(event) {
//     event.preventDefault();
  
//     const name = document.querySelector('#name-signup').value.trim();
//     const email = document.querySelector('#email-signup').value.trim();
//     const password = document.querySelector('#password-signup').value.trim();
  
//     if (name && email && password) {
//       const response = await fetch('/api/users', {
//         method: 'post',
//         body: JSON.stringify({
//           name,
//           email,
//           password
//         }),
//         headers: { 'Content-Type': 'application/json' }
//       });
  
//       // check the response status
//       if (response.ok) {
//         console.log('success');
//       } else {
//         alert(response.statusText);
//       }
//     }
//   }
  
//   document.querySelector('#signup-submit').addEventListener('submit', signupFormHandler);

// //   login
//   async function loginFormHandler(event) {
//     event.preventDefault();
  
//     const email = document.querySelector('#email-login').value.trim();
//     const password = document.querySelector('#password-login').value.trim();
  
//     if (email && password) {
//       const response = await fetch('/api/users/login', {
//         method: 'post',
//         body: JSON.stringify({
//           email,
//           password
//         }),
//         headers: { 'Content-Type': 'application/json' }
//       });
  
//       if (response.ok) {
//         document.location.replace('/');
//       } else {
//         alert(response.statusText);
//       }
//     }
//   }
  
//   document.querySelector('#login-submit').addEventListener('submit', loginFormHandler);