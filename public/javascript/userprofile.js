async function newFormHandler(event) {
    event.preventDefault();
  
    const name = document.querySelector('h1 [name="name-title"]').value;
  
    const response = await fetch(`/api/user`, {
      method: 'User',
      body: JSON.stringify({
        name
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/user');
    } else {
      alert(response.statusText);
    }
  }

  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);