
const baseUrl = "https://pacific-headland-08901.herokuapp.com/";
class Manager {
  constructor(firstName, lastName, emailAddress) {
    (this.firstName = firstName),
      (this.lastName = lastName),
      (this.emailAddress = emailAddress);
  }

  login() {
    console.log("We Entry");
    let email = sessionStorage.getItem("userEmail");
    // let email;
    fetch(baseUrl+"users")
      .then((response) => response.json())
      .then((response) => manager.drawTable(manager.users))
      .then((response) => (email = response.emailAddress))
      .catch((err) => {
        console.log(err);
      });

    document.getElementById("email").innerHTML = `hello to ${email}`;
    console.log(email);
    this.getUsers();
  }

  getUsers() {
    fetch(baseUrl+"users")
      .then((response) => response.json())
      .then((response) => {
        (manager.users = response)})
      .then((response) => manager.drawTable(manager.users))
      .catch((err) => {
        console.log(err);
      });
  }


  drawTable(users) {
    const container = document.querySelector(".usersTable");
    container.innerHTML = "";
    let table = "";

    users.forEach((user) => {
      let bmi =
        user.weightsHistory[user.weightsHistory.length - 1].weight /
        Math.pow(user.height, 2);
      let c = "green";
      if (
        user.weightsHistory[user.weightsHistory.length - 1].weight >
        user.weightsHistory[user.weightsHistory.length - 2].weight
      ) {
        c = "red";
      }
      table += `
                <tr>
                    <th>${user.firstName + " " + user.lastName}</th>
                    <th style="color:${c}">${Math.floor(bmi * 100) / 100}</th>
                    <th><a href="../html/userPage.html?userId=${user.id}">details user</a></th>
                </tr>`;
    });
    
    container.innerHTML += table;
  }

  search(data, type) {

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

  details(email) {
    console.log("details(email)  called");
    window.location.href = "../html/userPage.html?emailAddress=" + email;
  }

  goodBMI(user) {
    if (user.weightsHistory.length > 1) {
      if (
        user.weightsHistory[user.weightsHistory.length - 1].weight /
          Math.pow(user.height, 2) >
        user.weightsHistory[user.weightsHistory.length - 2].weight /
          Math.pow(user.height, 2)
      )
        return 1;
    }
    if (user.weightsHistory.length > 1) {
      if (
        user.weightsHistory[user.weightsHistory.length - 1].weight /
          Math.pow(user.height, 2) <
        user.weightsHistory[user.weightsHistory.length - 2].weight /
          Math.pow(user.height, 2)
      )
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

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "id": document.getElementById("userId").value,
      "firstName": document.getElementById("firstName").value,
      "lastName": document.getElementById("lastName").value,
      "city": document.getElementById("city").value,
      "street": document.getElementById("street").value,
      "houseNumber": document.getElementById("houseNumber").value,
      "phoneNumber": document.getElementById("phoneNumber").value,
      "emailAddress": document.getElementById("emailAddress").value,
      "height": 1.6,
  "weightsHistory": [
    {
      "date": "12/03/2022",
      "weight": 60
    },
    {
      "date": "12/03/2022",
      "weight": 61.8
    },
    {
      "date": "12/03/2022",
      "weight": 60.9
    }
  ],
  "diary": { }
 
});
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch(baseUrl+"users", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

    document.getElementById("userToAdd").style.display="none"; 
    this.getUsers();  
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
  window.location.href = "../html/Manager.html";
}

function changeColor(bmiColor, id) {
  if (bmiColor < 0)
    document.getElementById(id).style.backgroundColor = "lightgreen";
  else document.getElementById(id).style.backgroundColor = "red";
}

function goodBMI(user) {
  manager.goodBMI(user);
}
