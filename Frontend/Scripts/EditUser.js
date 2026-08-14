const editForm = document.querySelector("#edit-form");
const fullnameInput = document.querySelector("#fullname");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");

let params = new URLSearchParams(window.location.search);
let id = params.get("id");


async function getEditUser() {

    // let params = new URLSearchParams(window.location.search);
    // let id = params.get("id");
    // console.log(id);

    let resp = await fetch(`https://js-crud-project.onrender.com/users/${id}`);
    // console.log(resp);

    let data = await resp.json();
    console.log(data);

    fullnameInput.value = data.fullname;
    emailInput.value = data.email;
    passwordInput.value = data.password;

}

getEditUser();


editForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    // let params = new URLSearchParams(window.location.search);
    // let id = params.get("id");

    let updatedData = {
        fullname: fullnameInput.value,
        email: emailInput.value.toLowerCase(),
        password: passwordInput.value
    };

    await fetch(`https://js-crud-project.onrender.com/users/${id}`, {
        method: "PUT",
        body: JSON.stringify(updatedData),
        headers: {
            "content-type": "application/json",
        }
    });

    window.location.href = "AllUsers.html";

})