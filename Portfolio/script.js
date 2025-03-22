// scripts.js

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent the default form submission behavior
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
      alert('Thank you for your message!');
  } else {
      alert('Please fill in all fields.');
  }
});
