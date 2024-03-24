// JavaScript for form validation and submission
document.getElementById('membership-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    // Retrieve form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const membershipType = document.getElementById('membership-type').value;
    // Send form data to backend (using AJAX or fetch)
    fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, membershipType })
    })
    .then(response => response.json())
    .then(data => {
        // Handle response from backend
        alert(data.message); // Show success or error message
    })
    .catch(error => console.error('Error:', error));
});
