function resetForm() {
    document.forms["FormName"].reset();
    alert("Your form has been reset.")
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

    var studno = document.getElementsByName('txtSN')[0].value;

    var studnoRegex = /^\d+$/;
    if (!studnoRegex.test(studno)){
        alert("Invalid student number.");
        return false;
    }


    alert("Your response has been fetched. Date: " + new Date().toLocaleDateString());

    var formData = {
        txtUserName: document.getElementsByName('txtUserName')[0].value,
        txtName: document.getElementsByName('txtName')[0].value,
        txtSN: document.getElementsByName('txtSN')[0].value,
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
            <link rel="icon" type="image/png" href="assets/cip_registrationForm.png">
            <link rel="stylesheet" href="form.css">
        </head>
        <body>
            <div class="container">
                <div class="title-reg">Registration Details</div>
                <br><br>
                <div class="reg-section">
                    <span class="reg-details">Username:</span>
                    <div class="response">
                        <p>${formData.txtUserName}</p>
                    </div>
                </div>
                <div class="reg-section">
                    <span class="reg-details">Full Name:</span>
                    <div class="response">
                        <p>${formData.txtName}</p>
                    </div>
                </div>
                <div class="reg-section">
                    <span class="reg-details">Student Number:</span>
                    <div class="response">
                        <p>${formData.txtSN}</p>
                    </div>
                </div>
                <div class="reg-section">
                    <span class="reg-details">Password:</span>
                    <div class="response">
                        <p>${formData.password}</p>
                    </div>
                </div>
                <div class="reg-section">
                    <span class="reg-details">Student Type:</span>
                    <div class="response">
                        <p>${formData.SType}</p>
                    </div>
                </div>
                <div class="reg-section">
                    <span class="reg-details">Gender:</span>
                    <div class="response">
                        <p>${formData.Gender}</p>
                    </div>
                </div>
                <div class="reg-section">
                    <span class="reg-details">Year:</span>
                    <div class="response">
                        <p>${formData.Year}</p>
                    </div>
                </div>
                <div class="reg-section">
                    <span class="reg-details">Course:</span>
                    <div class="response">
                        <p>${formData.Course}</p>
                    </div>
                </div>
                <div class="reg-section">
                    <span class="reg-details">Interests:</span>
                    <div class="response">
                        <p>${formData.Interest}</p>
                    </div>
                </div>
                <div class="reg-section">
                    <span class="reg-details">Insight:</span>
                    <div class="response">
                        <p>${formData.comment}</p>
                    </div>
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