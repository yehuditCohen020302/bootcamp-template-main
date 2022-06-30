class Manager {
  constructor(firstName, lastName, emailAddress) {
    (this.firstName = firstName),
      (this.lastName = lastName),
      (this.emailAddress = emailAddress);
  }

  login() {
    console.log("We Entry");
    let email = sessionStorage.getItem("userEmail");
    document.getElementById("email").innerHTML = `hello to ${email}`;
    console.log(email);
    this.getUsers();
  }

  getUsers() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/users");
    xhr.send();
    xhr.onload = function () {
      if (xhr.status != 200) {
        alert(`Error ${xhr.status}: ${xhr.statusText}`);
      } else {
        manager.users = JSON.parse(xhr.responseText);
        manager.drawTable(manager.users);
      }
    };
  }

  drawTable(users) {
    const container = document.querySelector(".usersTable");
    container.innerHTML = "";
    // const bmiColor= bmi-user.weightsHistory[user.weightsHistory.length - 2]
    //                         .weight / (Math.pow(user.height, 2));
    let table = "";
   
    users.forEach((user) => {
      let bmi = user.weightsHistory[user.weightsHistory.length - 1].weight / Math.pow(user.height, 2);
      let c = "green";
      if (user.weightsHistory[user.weightsHistory.length - 1].weight > user.weightsHistory[user.weightsHistory.length - 2].weight) {
          c = "red";
      }
      table += `
                <tr>
                    <th>${user.firstName + " " + user.lastName}</th>
                    <th style="color:${c}">${Math.floor(bmi * 100) / 100}</th>
                    
                    <td><button onClick="details()">Details</button></th>
                </tr>`;
    });
    // <th><a href="/userPage.html?email=${user.email}">details user</a></th>
    container.innerHTML += table;
  }

  search(data, type) {
    debugger;

    if (type == "firstName")
      this.filteredUser = this.users.filter((user) => {
        return user.firstName === data;
      });
    if (type == "lastName")
      this.filteredUser = this.users.filter((user) => {
        return user.lastName === data;
      });
    if (type == "email")
      this.filteredUser = this.users.filter((user) => {
        return user.emailAddress === data;
      });
    if (type == "phone")
      this.filteredUser = this.users.filter((user) => {
        return user.phoneNumber === data;
      });
    this.drawTable(this.filteredUser);
  }

  details() {
    console.log("details()  called");
  }

  goodBMI(user){
    debugger
      if(user.weightsHistory.length > 1){
          if((user.weightsHistory[user.weightsHistory.length-1].weight)/Math.pow(user.height,2)
          >(user.weightsHistory[user.weightsHistory.length-2].weight)/Math.pow(user.height,2))
              return 1;
      }
      if(user.weightsHistory.length > 1){
        if((user.weightsHistory[user.weightsHistory.length-1].weight)/Math.pow(user.height,2)
        <(user.weightsHistory[user.weightsHistory.length-2].weight)/Math.pow(user.height,2))
            return -1;
    }

      return 0;
  }

  OKaddUser() {
    //create new user object
    let user = new User(
      document.getElementById("userId").value,
      document.getElementById("firstName").value,
      document.getElementById("lastName").value,
      document.getElementById("city").value,
      document.getElementById("street").value,
      document.getElementById("houseNumber").value,
      document.getElementById("phoneNumber").value,
      document.getElementById("emailAddress").value,
      document.getElementById("height").value,
      document.getElementById("beginingWeight").value
    );

    let userTo = JSON.stringify(user);
    console.log(userTo);
    sessionStorage.setItem("currentUser", userTo);
    //and push the new user to the json file...
    this.addedUser();
  }

  addedUser() {
    debugger;
    const xhr = new XMLHttpRequest();

    let body = JSON.stringify(sessionStorage.getItem("currentUser"));
    debugger;
    console.log(body);
    xhr.open("POST", "http://localhost:3000/users");
    xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");

    xhr.send(body);
  }
}

let manager = new Manager();

function login() {
  manager.login();
}
function addUser() {
  console.log("addUser Entry");
  document.getElementById("userToAdd").style.display = "block";
}
function OKaddUser() {
  manager.OKaddUser();
}
function details() {
  manager.details();
}

function displayPhone() {
  let checkBox = document.getElementById("searchByPhone");
  let text = document.getElementById("textSearchByPhone");
  if (checkBox.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}
function displayEmail() {
  let checkBox = document.getElementById("searchByEmail");
  let text = document.getElementById("textSearchByEmail");
  if (checkBox.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}
function displayLastName() {
  let checkBox = document.getElementById("searchByLastName");
  let text = document.getElementById("textSearchByLastName");
  if (checkBox.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}
function displayFirstName() {
  let checkBox = document.getElementById("searchByFirstName");
  let text = document.getElementById("textSearchByFirstName");
  if (checkBox.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

function search() {
  const firstName = document.getElementById("searchByFirstName");
  const lastName = document.getElementById("searchByLastName");
  const email = document.getElementById("searchByEmail");
  const phone = document.getElementById("searchByPhone");
  let data;
  let type;
  debugger;
  if (firstName.checked == true) {
    data = document.getElementById("textSearchByFirstName").value;
    type = "firstName";
  } else if (lastName.checked == true) {
    data = document.getElementById("textSearchByLastName").value;
    type = "lastName";
  } else if (email.checked == true) {
    data = document.getElementById("textSearchByEmail").value;
    type = "email";
  } else if (phone.checked == true) {
    data = document.getElementById("textSearchByPhone").value;
    type = "phone";
  }

  manager.search(data, type);
}

function Reset() {
  manager.getUsers();
  window.location.href = "/src/Manager.html";
}

function changeColor(bmiColor, id) {
  debugger
  if (bmiColor < 0)
    document.getElementById(id).style.backgroundColor = "lightgreen";
  else 
    document.getElementById(id).style.backgroundColor = "red";
}

function goodBMI(user)
{
  manager.goodBMI(user);
}
