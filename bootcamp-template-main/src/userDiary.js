var allFoods=[];
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
        console.log(err)})
}

function drawUserDiary(currentUser) {
    document.getElementById("nameUser").innerHTML=currentUser.firstName+" "+ currentUser.lastName;
    // currentUser.diary.forEach(day=>{
    //     //להציג את היומן ע"י הטמפלט
        
    // })
}

  
function save(){
  let todayDiary;
  let todayFullDate=new Date();
  let today=`${todayFullDate.getDate()}/${todayFullDate.getMonth()}/${todayFullDate.getYear()}`;
  if(Object.values(currentUser.diary).includes(today)){
    todayDiary=currentUser.diary.days.filter(day=>day.date==today);
    todayDiary.meals.push(foodList);
    currentUser.diary.days.remove(day=>day.date==today);
  }else{
    todayDiary={
      date:today,
      meals:[
        foodList
      ]
    }
  }
  currentUser.diary.days.push(todayDiary);
  
    fetch('http://localhost:3000/users/'+currentUser.id, {
      method: "put",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(currentUser)
    }).then(response => {
      if(response.ok)
        console.log("update the user's diary run successfully!!")
      else
        console.log(response.status)
    }).catch(err => console.log(err));
    
}


let numMeal=1;
drowMeal=()=>{
  let numToCreateInput=numMeal;
  const element = document.querySelector(".add-date-card");
  const cln = element.content.cloneNode(true);
  cln.querySelector(".meal-title").innerText = `meal-${numMeal}`;
  cln.querySelector(".container-foods").id=`container-foods-${numMeal}`;
  cln.querySelector(".addMoreFood").addEventListener("click",()=>createInput(numToCreateInput));
  numMeal++;
  document.querySelector(".modal-content").appendChild(cln);
}


addDate=()=>{
    document.querySelector(".dateOfMeal").value = new Date().toISOString().split('T')[0];
    modal = document.getElementById("myModal");
    let btn = document.getElementById("myBtn");
    let span = document.getElementsByClassName("close")[0];
    btn.onclick = function() {
      modal.style.display = "block";
    }
    span.onclick = function() {
      modal.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    for (let i=0; i<3; i++)
        drowMeal()
}

  

