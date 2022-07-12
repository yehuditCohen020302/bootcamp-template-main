const baseUrl = 'https://pacific-headland-08901.herokuapp.com/';
let allFoods=[];
let currentUserId;
let currentUserDiary;

function showUserDiary(){
    console.log('UserDiary: in showUserDiary');
    const params=new URLSearchParams(window.location.search);
    currentUserId=params.get('userId');
    getByUserId();
}

function getByUserId(){
    fetch(`${baseUrl}users/${currentUserId}/diary`)
    .then(response => response.json())
    .then(response=>{
            currentUserDiary=response;
            drawUserDiary()
    })
    .catch(err => {
        console.log(err)})
}

function drawUserDiary() {
    currentUserDiary.days.forEach(day=>{
      const tmp=document.getElementsByTagName('template')[0];
      let element=tmp.content.cloneNode(true);
      element.querySelector('.date').innerText=day.date;
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
  while(document.getElementById(numOfFood)!=undefined && document.getElementById(numOfFood).value!=''){
    foodList.push(document.getElementById(numOfFood).value)
    numOfFood++;
  }
  let todayDiary;
  let today=document.querySelector('.dateOfMeal').value;
  let findTodayDiary
  if(currentUserDiary.days)
    findTodayDiary = currentUserDiary.days.filter(day=>day.date==today);
  let dateId='';
  if(findTodayDiary) {
    todayDiary=findTodayDiary[0];
    todayDiary.meals.push(foodList);
    dateId=`${today[0]}${today[1]}${today[2]}${today[3]}${today[5]}${today[6]}${today[8]}${today[9]}`
  }else{
    todayDiary={
      date:today,
      meals:[
        foodList
      ]
    }
  }
  fetch(`${baseUrl}users/${currentUserId}/diary/${dateId}`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todayDiary)
  }).then(response => {
    if(response.ok)
      console.log("update the user's diary run successfully!!")
    else
      console.log(response.status)
  }).catch(err => console.log(err));
  document.location.reload(true);
    // showUserDiary()
}


function drowMeal(){
 
  const element = document.querySelector('.add-meal-card');
  const cln = element.content.cloneNode(true);
  cln.querySelector('.meal-title').innerText = `new meal`;
  document.querySelector('.modal-content').appendChild(cln);
}
let foodNumber=2;
function addMoreFood(){
  let container = document.getElementById('newMealContainer');
  let input = document.createElement('input');
  input.type = 'text';
  input.id = foodNumber;
  input.value='';
  input.placeholder='Enter food';
  container.appendChild(input);
  container.appendChild(document.createElement('br'));
  container.appendChild(document.createElement('br'));
  foodNumber++;
}


addMeal=()=>{
    document.querySelector('.dateOfMeal').value = new Date().toISOString().split('T')[0];
    modal = document.getElementById('myModal');
    let btn = document.getElementById('myBtn');
    let span = document.getElementsByClassName('close')[0];
    btn.onclick = function() {
      modal.style.display = 'block';
    }
    span.onclick = function() {
      modal.style.display = 'none';
    }
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    }
}

  

