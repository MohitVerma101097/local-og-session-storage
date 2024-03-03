const nameTxt = document.querySelector("#name-txt");
const addBtn = document.querySelector("#add-btn");
const deleteBtn = document.querySelector("#delete-btn");

// Function to add name to local storage and update display



const addName = () => {
    const userName = prompt("What is your name?");
    console.log(userName);
    localStorage.setItem("userName", userName);
    updateName();
};

// Function to delete name from local storage and update display
const deleteName = () => {
    localStorage.removeItem("userName");
    updateName(); // Update display after deletion
};

// Function to check if local storage is available
const testStorage = () => {
    if (!localStorage) {
        nameTxt.innerHTML = `Ditt navn er: ukjent`;
    }
};

// Function to update name display
const updateName = () => {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
        nameTxt.innerHTML = `Ditt navn er: ${storedName}`;
    } else {
        nameTxt.innerHTML = `Ditt navn er: ukjent`;
    }
};

// Call testStorage initially to display stored name if local storage is not supported
testStorage();

// Event listeners
addBtn.addEventListener("click", addName);
deleteBtn.addEventListener("click", deleteName);
