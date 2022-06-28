
function showUserDiary(){
    console.log("UserDiary: in showUserDiary");
// debugger
    const params=new URLSearchParams(window.location.search);
    getByEmail(params.get("emailAddress"));

}

function getByEmail(emailAddress) {
    // debugger
    const xhr = new XMLHttpRequest();
        xhr.open("GET", 'http://localhost:3000/users');
        xhr.send();
        xhr.onload = function () {
            if (xhr.status != 200) {
                alert(`Error ${xhr.status}: ${xhr.statusText}`);
            } else {
                const allUsers = JSON.parse(xhr.responseText);
                const user=allUsers.filter(user => user.emailAddress==emailAddress);
                drawUserDiary(user[0])
            }
        }
}


function drawUserDiary(currentUser) {
    document.getElementById("nameUser").innerHTML=currentUser.firstName+" "+ currentUser.lastName;

}

var numberFood=0;
function btnAddFood(){
   document.getElementById("divContainer").innerHTML+=`<input type="text" id="food${++numberFood}"><br>`

}

function btnCalculateFood(){
    console.log("CalculateFood");
   debugger
    for(let i=0; i<=numberFood; i++){
        const prod = document.getElementById(`food${i}`).value;
        const req = fetch(
              ` https://data.gov.il/api/3/action/datastore_search?resource_id=c3cb0630-0650-46c1-a068-82d575c094b2&q=${prod}`
            )
              .then((response) => response.json())
              .then((response) => {
                const data = response.result.records;
                console.log(data);
                return data;
            })
    }

}