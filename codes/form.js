function validatePassword() {
    var password = document.getElementsByName('password')[0].value;
    var confirmPassword = document.getElementsByName('confirm_password')[0].value;

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return false;
    }
    return true;
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

function saveAndTransfer() {
    var formData = {
        txtUserName: document.getElementsByName('txtUserName')[0].value,
        txtName: document.getElementsByName('txtName')[0].value,
        password: document.getElementsByName('password')[0].value,
        confirm_password: document.getElementsByName('confirm_password')[0].value,
        SType: document.querySelector('input[name="SType"]:checked').value,
        Gender: document.querySelector('input[name="Gender"]:checked').value,
        Year: document.getElementsByName('Year')[0].value,
        Course: document.getElementsByName('Course')[0].value,
        Interest: getSelectedInterests(),
        comment: document.getElementsByName('comment')[0].value
    };

    var serializedFormData = JSON.stringify(formData);

    var newWindow = window.open();
    newWindow.document.write(`
        <html>
        <head>
            <title>Registration Details</title>
            <link rel="stylesheet" href="form.css">
        </head>
        <body>
            <div class="container">
                <div class="title">Registration Details</div>
                <br>
                <div class="registration-info">
                    <p><strong>Username:</strong> ${formData.txtUserName}</p>
                    <p><strong>Full Name:</strong> ${formData.txtName}</p>
                    <p><strong>Password:</strong> ${formData.password}</p>
                    <p><strong>Student Type:</strong> ${formData.SType}</p>
                    <p><strong>Gender:</strong> ${formData.Gender}</p>
                    <p><strong>Year:</strong> ${formData.Year}</p>
                    <p><strong>Course:</strong> ${formData.Course}</p>
                    <p><strong>Interests:</strong> ${formData.Interest}</p>
                    <p><strong>Comment:</strong> ${formData.comment}</p>
                </div>
            </div>
        </body>
        </html>
    `);
}

function getSelectedInterests() {
    var interests = document.getElementsByName('Interest');
    var selectedInterests = [];
    for (var i = 0; i < interests.length; i++) {
        if (interests[i].checked) {
            selectedInterests.push(interests[i].value);
        }
    }
    return selectedInterests.join(', ');
}