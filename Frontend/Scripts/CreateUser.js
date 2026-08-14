const registerForm = document.querySelector("#register-form");
const fullnameInput = document.querySelector("#fullname");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

// console.log(registerForm);
// console.log(fullnameInput);
// console.log(emailInput);
// console.log(passwordInput);

registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();                                // stops browser defalut behaviour
    console.log("Form Submitted");


    // console.log(fullnameInput.value);               // to print value of the form
    // console.log(emailInput.value);
    // console.log(passwordInput.value);

    const newUser = {
        fullname: fullnameInput.value,
        email: emailInput.value,
        password: passwordInput.value
    };

    console.log(newUser);


    //! send newUser to Database
    await fetch("https://js-crud-project.onrender.com/users", {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "content-type": "application/json"
        }
    });



    //! Navigate to all users page
    window.location.href = "AllUsers.html";


})





