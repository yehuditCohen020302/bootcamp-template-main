class Manager {
  constructor(firstName, lastName, emailAddress) {
    (this.firstName = firstName),
      (this.lastName = lastName),
      (this.emailAddress = emailAddress);
  }

  login() {
    console.log("We Entry");
    var email = sessionStorage.getItem("userEmail");
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
        manager.drawTable( manager.users);
      }
    };
  }

  drawTable(users) {
    
    const container = document.querySelector(".usersTable");
    container.innerHTML = "";
    let table = "";
    users.forEach((user) => {
      table += `
                <tr>
                    <td>${user.firstName + " " + user.lastName}</th>
                    <td style="color:manager.goodBMI(user)==true? red: green;">
                        ${
                          user.weightsHistory[user.weightsHistory.length - 1]
                            .weight / Math.pow(user.height, 2)
                        }</th>
                    <td><button onClick="details()">Details</button></th>
                </tr>`;
    });
    container.innerHTML += table;
  }

  search(data,type) {
    debugger
   
        if (type == "firstName")
            this.filteredUser=this.users.filter(user => {
            return user.firstName === data
            });
        if (type == "lastName")
            this.filteredUser=this.users.filter(user => {
            return user.lastName === data
            });
        if (type == "email")
            this.filteredUser=this.users.filter(user => {
            return user.emailAddress === data
            });
        if (type == "phone")
            this.filteredUser=this.users.filter(user => {
            return user.phoneNumber === data
            });
    

    this.drawTable(this.filteredUser);
  
  }



  details() {
    console.log("details()  called");

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


function displayPhone(){
    var checkBox=document.getElementById("searchByPhone");
    var text= document.getElementById("textSearchByPhone");
    if (checkBox.checked == true){
        text.style.display = "block";
      } else {
        text.style.display = "none";
      }
}
function displayEmail(){
    var checkBox=document.getElementById("searchByEmail");
    var text= document.getElementById("textSearchByEmail");
    if (checkBox.checked == true){
        text.style.display = "block";
      } else {
        text.style.display = "none";
      }
}
function displayLastName(){
    var checkBox=document.getElementById("searchByLastName");
    var text= document.getElementById("textSearchByLastName");
    if (checkBox.checked == true){
        text.style.display = "block";
      } else {
        text.style.display = "none";
      }
}
function displayFirstName(){
    var checkBox=document.getElementById("searchByFirstName");
    var text= document.getElementById("textSearchByFirstName");
    if (checkBox.checked == true){
        text.style.display = "block";
      } else {
        text.style.display = "none";
      }
}

function search()
{
    const firstName=document.getElementById("searchByFirstName");
    const lastName=document.getElementById("searchByLastName");
    const email=document.getElementById("searchByEmail");
    const phone=document.getElementById("searchByPhone");
    var data;
    var type;
    debugger
    if(firstName.checked==true)
     {   data = document.getElementById("textSearchByFirstName").value;
        type='firstName';}
        else if(lastName.checked==true)
        {   data = document.getElementById("textSearchByLastName").value;
             type='lastName';}
             else if(email.checked==true)
              {  data = document.getElementById("textSearchByEmail").value;
                 type='email';}
                    else if(phone.checked==true) 
                     {  data = document.getElementById("textSearchByPhone").value;
                        type='phone';}
    

    manager.search(data,type);
}