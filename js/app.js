function register() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "" || password === "") {
        document.getElementById("message").innerText = "Please fill all fields!";
        return;
    }

    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    document.getElementById("message").innerText = "Registered Successfully!";
}

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const savedEmail = localStorage.getItem("userEmail");
    const savedPassword = localStorage.getItem("userPassword");

    if (email === savedEmail && password === savedPassword) {
        document.getElementById("message").innerText = "Login Successful!";
    } else {
        document.getElementById("message").innerText = "Invalid Email or Password!";
    }
}
