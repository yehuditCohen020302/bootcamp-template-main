var allFoods=[];
var hasAlreadyDiary=true;
var currentUser;

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
            currentUser=response[0];
            drawUserDiary(response[0])
    })
    .catch(err => {
        hasAlreadyDiary=false;
        console.log(err)})
}

function drawUserDiary(currentUser) {
    document.getElementById("nameUser").innerHTML=currentUser.firstName+" "+ currentUser.lastName;
    currentUser.diary.forEach(day=>{
        //להציג את היומן ע"י הטמפלט
    })
}

  
function saveChanges(){
    if(hasAlreadyDiary){
        updateUsersDiary()
    }else{
        addNewUsersDiary();
    }
}

function updateUsersDiary(){
    
}

function addNewUsersDiary(){
    var today=currentUser.diary.filter(day=>day.date==Date.now())
    
const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'Fetch PUT Request Example' })
};
fetch('https://reqres.in/api/articles/1', requestOptions)
    .then(response => response.json())
    .then(data => element.innerHTML = data.updatedAt );

      fetch('http://localhost:3000/users', {
        method: "POST",
        body: JSON.stringify(_data),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then(response => response.json()) 
      .then(json => console.log(json))
      .catch((err) => console.log(err));
}


  
