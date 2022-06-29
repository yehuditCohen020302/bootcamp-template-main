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

function drawUserDiary(currentUser) {
    document.getElementById("nameUser").innerHTML=currentUser.firstName+" "+ currentUser.lastName;
    currentUser.diary.forEach(diary=>{

    })
}

 
function btnOkFood()
{
  debugger
    console.log("foodList in btnOkFood:");
    console.log(foodList);

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


  
