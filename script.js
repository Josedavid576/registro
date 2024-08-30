document.querySelector("form").addEventListener("submit", function (e) {
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");

    if (password.value !== confirmPassword.value) {
        e.preventDefault();
        confirmPassword.setCustomValidity("Las contraseñas no coinciden");
    } else {
        confirmPassword.setCustomValidity("");
    }
});
