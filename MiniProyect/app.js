document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    if (name === "" || email === "" || password === "") {
        alert("Please fill out all fields.");
        return;
    }
    if (!validateEmail(email)) {
        alert("Invalid email address.");
        return;
    }
    if (!validatePassword(password)) {
        alert("Password must be at least 6 characters long.");
        return;
    }
});
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
}
function validatePassword(password) {
    return password.length >= 6;
}

const boton = document.getElementById('boton');
let user = 0;
boton.addEventListener('click', function() {
    user++;
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const data = {
        user: user,
        name: name,
        email: email,
        password: password
    };
    const jsonData = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonData], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "data.json";
    a.click();
    URL.revokeObjectURL(url);
});
