const baseUrl = "https://pacific-headland-08901.herokuapp.com/";
let currentUser;
function loadUser(){
    const params = new URLSearchParams(window.location.search)
    if(params.has('userId'))
        getUserById(params.get('userId'));
}

function getUserById(id) {

fetch(`${baseUrl}users/${id}`)
  .then(response => response.json())
  .then(response=>{
    currentUser=response;
    drawUserDetails(response)})
  .catch(error => console.log('error', error));

}

function drawUserDetails(currentUser) {
    document.getElementById("userId").value=currentUser.id;
    document.getElementById("firstName").value=currentUser.firstName;
    document.getElementById("lastName").value=currentUser.lastName;
    document.getElementById("city").value=currentUser.city;
    document.getElementById("street").value=currentUser.street;
    document.getElementById("houseNumber").value=currentUser.houseNumber;
    document.getElementById("phoneNumber").value=currentUser.phoneNumber;
    document.getElementById("emailAddress").value=currentUser.emailAddress;
    document.getElementById("height").value=currentUser.height;
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
    console.log('InUserDiary');
    window.location.href = `../html/userDiary.html?userId=${currentUser.id}`;
}
