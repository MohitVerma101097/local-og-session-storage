const nameTxt = document.querySelector("#name-txt");
const addBtn = document.querySelector("#add-btn");
const deleteBtn = document.querySelector("#delete-btn");

// Define the addName function before using it
const addName = () => {
    const userName = prompt("What is your name?");
    console.log(userName);
    localStorage.setItem("userName", userName)

    nameTxt.innerHTML = `Ditt navn er: ${localStorage.getItem("userName")}`
};

nameTxt.innerHTML = `Ditt navn er: ${localStorage.getItem("userName")}`

addBtn.addEventListener("click", addName);
