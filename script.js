document.addEventListener("DOMContentLoaded", ()=> {
    const registrationForm = document.getElementById("registration-form")
    const feedbackDiv = document.getElementById("form-feedback")

    registrationForm.addEventListener("submit", (event) => {
        event.preventDefault();
        let email = document.getElementById("email")
        email = email.value.trim()
        let username = document.getElementById("username")
        username = username.value.trim()
        let password = document.getElementById("password")
        password = password.value.trim()
        let isValid = true
        let messages = []
        
        if (username.legth > 3) {
            messages.push(`Your provided username '${username}' is Invalid`)
            isValid = false
            console.log(isValid)
        }
        else if (!email.includes(".") && !email.includes("@")) {
            messages.push(`Your provided email address '${email}' is Invalid`)
            isValid = false
            console.log(isValid)
        }
        else if (password.legth < 8) {
            messages.push(`Invalid password`)
            isValid = false
            console.log(isValid)
        }

        feedbackDiv.style.display = "block"

        if (isValid) {
            feedbackDiv.textContent = "Registration successful!"
            feedbackDiv.style.color = "#28a745"
            feedbackDiv.style.backgroundColor = "#f4faf5ff"
        } else {
            feedbackDiv.style.color = "#dc3545"
            feedbackDiv.innerHTML = messages.join("<br>")
        }
        
    })
});
