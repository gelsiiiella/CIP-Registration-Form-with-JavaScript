function validatePassword() {
    var password = document.getElementsByName('password')[0].value;
    var confirmPassword = document.getElementsByName('confirm_password')[0].value;

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return false;
    }
    return true;
    document.write(`<link rel="stylesheet" type="text/css" href="form.css">`);
}
function resetForm() {
    document.forms["FormName"].reset();
}

document.getElementById("reset").addEventListener("click", resetForm);


document.forms["FormName"].addEventListener("submit", function(event) {
    if (!validatePassword()) {
        event.preventDefault(); 
    }
});