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
            drawUserDiary()

    })
    .catch(err => {
        console.log(err)})
}

function drawUserDiary() {
    document.getElementById("nameUser").innerHTML=currentUser.firstName+" "+ currentUser.lastName;

    currentUser.diary.days.forEach(day=>{
      const tmp=document.getElementsByTagName("template")[0];
      let element=tmp.content.cloneNode(true);
      element.querySelector(".date").innerText=day.date;
      let mealNumber=1;
      day.meals.forEach(meal=>{
        element.querySelector(`.meal${mealNumber}`).innerText=meal.toString();
        mealNumber++;
      })
      const mealsTable=document.getElementById('mealsTable');
      mealsTable.append(element);
    });
}

  
function save(){
  let foodList=[];
  let numOfFood=1;
  while(document.getElementById(numOfFood)!=undefined && document.getElementById(numOfFood).value!=""){
    foodList.push(document.getElementById(numOfFood).value)
    numOfFood++;
  }
  let todayDiary;
  let today=document.querySelector('.dateOfMeal').value;
  // let today=`${todayFullDate.getDate()}/${todayFullDate.getMonth()}/${todayFullDate.getFullYear()}`;
  let findTodayDiary=currentUser.diary.days.filter(day=>day.date==today);
  if(findTodayDiary.length>0) {
    todayDiary=findTodayDiary[0];
    todayDiary.meals.push(foodList);
    currentUser.diary.days=currentUser.diary.days.filter(day=>day.date!=today);
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


// let numMeal=1;
function drowMeal(){
  // let numToCreateInput=numMeal;
  const element = document.querySelector(".add-meal-card");
  const cln = element.content.cloneNode(true);
  cln.querySelector(".meal-title").innerText = `new meal`;
  // cln.querySelector(".container-foods").id=`container-foods-${numMeal}`;
  // cln.querySelector(".addMoreFood").addEventListener("click",()=>createInput(numToCreateInput));
  // numMeal++;
  document.querySelector(".modal-content").appendChild(cln);
}


addMeal=()=>{
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
    // for (let i=0; i<3; i++)
    //     drowMeal()
}

  

