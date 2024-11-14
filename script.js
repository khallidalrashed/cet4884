document.getElementById('signup-link').addEventListener('click', function() {
    document.getElementById('signup').style.display = 'block';
    document.getElementById('login').style.display = 'none';
});

document.getElementById('login-link').addEventListener('click', function() {
    document.getElementById('login').style.display = 'block';
    document.getElementById('signup').style.display = 'none';
});


document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    alert('Signup successful! You can now log in.');

    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';

    document.getElementById('signup').style.display = 'none';
    document.getElementById('login').style.display = 'block';
});


document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const loginEmail = document.getElementById('login-email').value;
    const loginPassword = document.getElementById('login-password').value;

    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (storedEmail && storedPassword) { 
        if (loginEmail === storedEmail && loginPassword === storedPassword) {
            alert('Login successful!');
            
            document.getElementById('login-email').value = '';
            document.getElementById('login-password').value = '';
        } else {
            alert('Incorrect email or password');
        }
    } else {
        alert('No account found. Please sign up first.');
    }
});
