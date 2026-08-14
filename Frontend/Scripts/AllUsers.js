const usersContainer = document.querySelector("#users-container");
console.log(usersContainer);

async function getAllUsers() {
    try {
        let resp = await fetch("https://js-crud-project.onrender.com");
        let data = await resp.json();
        // console.log(data);
        displayUsers(data);

    } catch (error) {
        console.log(error);

    }
}
getAllUsers();

// function to display users
function displayUsers(users) {
    console.log(users);

    users.forEach((user) => {
        let { id, fullname, email, password } = user;

        const userDiv = document.createElement("div");
        userDiv.className = "user-card"
        userDiv.id = `user-${id}`

        // console.log(userDiv);

        userDiv.innerHTML = `
        <figure class="user-avatar"> ${fullname[0].toUpperCase()} </figure>
        <h3> ${fullname} </h3>
        <p> ${email} </p>
        <p> ${password} </p>

        <button class="edit-btn" onclick='editUser(${id})'> Edit </button>
        <button class="delete-btn" onclick='deleteUser(${id})'> Delete </button>
        `

        usersContainer.append(userDiv);

    });


}

async function deleteUser(id) {
    // console.log("Delete this user", id);

    await fetch(`https://js-crud-project.onrender.com/users/${id}`, {
        method: "DELETE"
    });

    alert("User Deleted");

}


function editUser(id) {
    console.log(id);

    window.location.href = `EditUser.html?id=${id}`

}
