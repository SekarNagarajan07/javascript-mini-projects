//variables

const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const addBtn = document.getElementById("add-btn");
const tableBody = document.getElementById("table-body");
const updateNameInput = document.getElementById("update-name-input");
const updateEmailInput = document.getElementById("update-email-input");
const updateBtn = document.getElementById("update-btn");
const cancelBtn = document.getElementById("cancel-btn");

let users = JSON.parse(localStorage.getItem("users"));
let currentUserId = null;
const validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//console.log(validRegex);

//Functions

function renderTable() {
  tableBody.innerHTML = "";
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const tr = document.createElement("tr");
    const idTd = document.createElement("td");
    const nameTd = document.createElement("td");
    const emailTd = document.createElement("td");
    const actionId = document.createElement("td");
    const editBtn = document.createElement("button");
    editBtn.className = "edit-btn";
    const deleteBtn = document.createElement("button");
    editBtn.className = "delete-btn";
    idTd.innerText = user.id;
    nameTd.innerText = user.name;
    emailTd.innerText = user.email;
    editBtn.innerText = "Edit";
    deleteBtn.innerText = "Delete";
    editBtn.addEventListener("click", () => {
      showUpdateForm(user.id);
    });
    deleteBtn.addEventListener("click", () => {
      deleteUser(user.id);
    });
    actionId.appendChild(editBtn);
    actionId.appendChild(deleteBtn);
    tr.appendChild(idTd);
    tr.appendChild(nameTd);
    tr.appendChild(emailTd);
    tr.appendChild(actionId);
    tableBody.appendChild(tr);
  }
}

//addButton

function addUser() {
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  if (email.match(validRegex)) {
    if (name && email != null) {
      var id = 1;
      var val = users
        .map(function (x) {
          return x.id;
        })
        .indexOf(id);
      while (val != -1) {
        id++;
        val = users
          .map(function (x) {
            return x.id;
          })
          .indexOf(id);
      }

      const user = {
        id: id,
        name: name,
        email: email,
      };

      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
      nameInput.value = "";
      emailInput.value = "";
      renderTable();
    } else {
      alert("Name is Required");
    }
  } else {
    alert("Invalid email address");
  }
}

//updateButton

function updateUser() {
  const name = updateNameInput.value;
  const email = updateEmailInput.value;
  if (email.match(validRegex)) {
    const index = users.findIndex((user) => user.id === currentUserId);
    if (index !== -1) {
      users[index].name = name;
      users[index].email = email;
      localStorage.setItem("users", JSON.stringify(users));
      hideUpdateForm();
      renderTable();
    }
  } else {
    alert("Invalid email address");
  }
}

//showUpdate

function showUpdateForm(userId) {
  const user = users.find((user) => user.id === userId);
  // console.log(user);
  if (user) {
    updateNameInput.value = user.name;
    updateEmailInput.value = user.email;
    currentUserId = user.id;
    updateBtn.addEventListener("click", updateUser);
    cancelBtn.addEventListener("click", hideUpdateForm);
    updateNameInput.style.display = "inline-block";
    updateEmailInput.style.display = "inline-block";
    document.getElementById("update-container").style.display = "block";
  }
}

//HideUpdate

function hideUpdateForm() {
  updateNameInput.value = "";
  updateEmailInput.value = "";
  currentUserId = null;
  updateBtn.removeEventListener("click", updateUser);
  cancelBtn.removeEventListener("click", hideUpdateForm);
  updateBtn.style.display = "none";
  cancelBtn.style.display = "none";
  document.getElementById("update-container").style.display = "none";
}

//DeleteButton

function deleteUser(userId) {
  users = users.filter((user) => user.id === userId);
  localStorage.setItem("users", JSON.stringify(users));
  if (users.length == 0) {
    hideUpdateForm();
  }
  renderTable();
}

//Event Listener

addBtn.addEventListener("click", addUser);

// Initalize table

renderTable();
