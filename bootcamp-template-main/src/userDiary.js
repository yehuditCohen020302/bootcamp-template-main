var allFoods=[];
var usersOldDiary;
var hasAlreadyDiary=true;
var usersId;

function showUserDiary(){
    console.log("UserDiary: in showUserDiary");
// debugger
    const params=new URLSearchParams(window.location.search);
    getByEmail(params.get("emailAddress"));

}

function getByEmail(emailAddress){
    fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(response => response.filter(user=>user.emailAddress === emailAddress))
    .then(response=>{
            usersId=response[0].id;
            usersOldDiary=response[0].diary;
            drawUserDiary(response[0])
    })
    .catch(err => {
        hasAlreadyDiary=false;
        console.log(err)})
}

// function getByEmail(emailAddress) {
//     // debugger
//     const xhr = new XMLHttpRequest();
//         xhr.open("GET", 'http://localhost:3000/users');
//         xhr.send();
//         xhr.onload = function () {
//             if (xhr.status != 200) {
//                 alert(`Error ${xhr.status}: ${xhr.statusText}`);
//             } else {
//                 const allUsers = JSON.parse(xhr.responseText);
//                 const user=allUsers.filter(user => user.emailAddress==emailAddress);
//                 usersId=user[0].id;
//                 drawUserDiary(user[0])
//             }
//         }
// }


function drawUserDiary(currentUser) {
    document.getElementById("nameUser").innerHTML=currentUser.firstName+" "+ currentUser.lastName;
    currentUser.diary.forEach(diary=>{

    })
}



function btnAddFood(){
//  document.getElementById("divContainer").innerHTML+=`<input type="text" id="food${numberFood++}"><br>`
    const food=document.getElementById("searchProduct").value;
    document.getElementById("divContainer").innerHTML+=`<li>${food}</li>`
    allFoods+=" "+food;
    const req = fetch(
        ` https://data.gov.il/api/3/action/datastore_search?resource_id=c3cb0630-0650-46c1-a068-82d575c094b2&q=${food}`
      )
        .then((response) => response.json())
        .then((response) => {
          const data = response.result.records;
          console.log(data);
          return data;
      })

var numberFood=0;
function btnAddFood(){
   document.getElementById("divContainer").innerHTML+=`<input type="text" id="food${++numberFood}"><br>`


}

function btnCalculateFood(){

    debugger
 console.log("CalculateFood");
 const prod = document.getElementById("foodtxt"); 
console.log(allFoods);

}

  }

function saveChanges(){
    //לקחת את המערך החדש של האוכל ואת התאריך
    if(hasAlreadyDiary){
        updateUsersDiary()
    }else{
        addNewUsersDiary();
    }
}

function updateUsersDiary(){

}

function addNewUsersDiary(){
      let _data = {
          userId:usersId,
          diary:[
              {date:document.getElementById("dateEat").value,
                meals:[

                ]
            }
          ]
      }
      fetch('http://localhost:3000/diarys', {
        method: "POST",
        body: JSON.stringify(_data),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then(response => response.json()) 
      .then(json => console.log(json))
      .catch((err) => console.log(err));
}


  