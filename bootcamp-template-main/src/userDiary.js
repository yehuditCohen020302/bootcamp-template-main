let allFoods=[];
let hasAlreadyDiary=true;
let currentUser;

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
            for (let i=0; i<3; i++)
            drawUserDiary()
            // drawUserDiary(response[0])
    })
    .catch(err => {
        hasAlreadyDiary=false;
        console.log(err)})
}

  
function saveNewDate(){
    if(hasAlreadyDiary){
        updateUsersDiary()
    }else{
        addNewUsersDiary();
    }
}

function updateUsersDiary(){
    console.log("in updateUsersDiary");
}

function addNewUsersDiary(){
    let today=currentUser.diary.filter(day=>day.date==Date.now())
    
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

// numFood=1;
// function drawUserDiary(currentUser) {

//   const element = document.querySelector(".dayEating-card");
//   const cln = element.content.cloneNode(true);
  
//   cln.querySelector(".meal-title").innerText = `meal-${numMeal}`;
//   cln.querySelector(".container-foods").id=`container-foods-${numMeal}`;

//   numFood++;
//   document.querySelector(".modal-content").appendChild(cln);
// document.getElementById("nameUser").innerHTML=currentUser.firstName+" "+ currentUser.lastName;
// currentUser.diary.forEach(d=>{
  // //     //להציג את היומן ע"י הטמפלט
// document.querySelector(".dateOfMeal").value = new Date().toISOString().split('T')[0];
//    document.querySelector(".1").value =d.meal.shmmitzrach
//   })   

// }

let numFood=1;
function drawUserDiary(){
  // let numToCreateInput=numFood;
  const element = document.querySelector(".dayEating-card");
  const cln = element.content.cloneNode(true);
  cln.querySelector(".one-day").innerText = `meal-${numFood}`;
  cln.querySelector("td").id=`${numFood}`;
  
  numMeal++;
  document.querySelector(".TableContainer").appendChild(cln);
}


let numMeal=1;
function drowMeal(){
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

  

