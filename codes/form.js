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
    var password = document.getElementsByName('password')[0].value;
    var confirmPassword = document.getElementsByName('confirm_password')[0].value;

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return false;
    }

    var formData = {
        txtUserName: document.getElementsByName('txtUserName')[0].value,
        txtName: document.getElementsByName('txtName')[0].value,
        password: password, 
        confirm_password: confirmPassword, 
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
                    <div class="reg-section">
                        <p><strong>Username:</strong> ${formData.txtUserName}</p>
                    </div>
                    <div class="reg-section">
                        <p><strong>Full Name:</strong> ${formData.txtName}</p>
                    </div>
                    <div class="reg-section">
                        <p><strong>Password:</strong> ${formData.password}</p>
                    </div>
                    <div class="reg-section">
                        <p><strong>Student Type:</strong> ${formData.SType}</p>
                    </div>
                    <div class="reg-section">
                        <p><strong>Gender:</strong> ${formData.Gender}</p>
                    </div>
                    <div class="reg-section">
                        <p><strong>Year:</strong> ${formData.Year}</p>
                    </div>
                    <div class="reg-section">
                        <p><strong>Course:</strong> ${formData.Course}</p>
                    </div>
                    <div class="reg-section">
                        <p><strong>Interests:</strong> ${formData.Interest}</p>
                    </div>
                    <div class="reg-section">
                        <p><strong>Comment:</strong> ${formData.comment}</p>
                    </div>
                    
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