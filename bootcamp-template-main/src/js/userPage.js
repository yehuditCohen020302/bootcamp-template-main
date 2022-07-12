const baseUrl = "https://pacific-headland-08901.herokuapp.com/";
function loadUser(){
    debugger
    const params = new URLSearchParams(window.location.search)
    if(params.has("userId"))
        getUserById(params.get("userId"));
}

function getUserById(id) {

fetch(`${baseUrl}users`)
  .then(response => response.json())

  .then((response) => { 
    const allUsers = response;
    console.log(allUsers);
    const user= allUsers.filter(user => user.id==id);
    drawUserDetails(user[0])
  })
  .catch(error => console.log('error', error));

}

// function getUserByEmail(emailAddress) {
//     const xhr = new XMLHttpRequest();
//         xhr.open("GET", 'http://localhost:3000/users');
//         xhr.send();
//         xhr.onload = function () {
//             if (xhr.status != 200) {
//                 alert(`Error ${xhr.status}: ${xhr.statusText}`);
//             } else {
//                 const allUsers = JSON.parse(xhr.responseText);
//                 const user=allUsers.filter(user => user.emailAddress==emailAddress);
//                 drawUserDetails(user[0])
//             }
//         }
// }

function drawUserDetails(currentUser) {
    debugger
    document.getElementById("userId").value=currentUser.id;
    document.getElementById("firstName").value=currentUser.firstName;
    document.getElementById("lastName").value=currentUser.lastName;
    document.getElementById("city").value=currentUser.city;
    document.getElementById("street").value=currentUser.street;
    document.getElementById("houseNumber").value=currentUser.houseNumber;
    document.getElementById("phoneNumber").value=currentUser.phoneNumber;
    document.getElementById("emailAddress").value=currentUser.emailAddress;
    document.getElementById("height").value=currentUser.height;
    // document.getElementById("weight").value=this.currentUser.weightsHistory[this.currentUser.weightsHistory.length-1].weight;
    document.getElementById("BMI").value=(currentUser.weightsHistory[currentUser.weightsHistory.length-1].weight)/Math.pow(currentUser.height,2)

    currentUser.weightsHistory.forEach(meeting => {
        const tmp=document.getElementsByTagName("template")[0];
        let element=tmp.content.cloneNode(true);
        element.querySelector(".date").innerText=meeting.date;
        element.querySelector(".weight").innerText=meeting.weight;
        const weightsTable=document.getElementById('weights');
        weightsTable.append(element);
    });
}


function UserDiary(){
    console.log("InUserDiary");
    // debugger
    email=document.getElementById("emailAddress").value;
    window.location.href = "../html/userDiary.html?emailAddress="+email;

}
