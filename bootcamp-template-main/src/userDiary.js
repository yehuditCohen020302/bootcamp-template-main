
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

 
function btnOkFood()
{
  debugger
    console.log("foodList in btnOkFood:");
    console.log(foodList);

}


//  var allFoods=[];
// function btnAddFood(foods){
//     debugger
// //  document.getElementById("divContainer").innerHTML+=`<input type="text" id="food${numberFood++}"><br>`
//     // const food=document.getElementById("window").getElementById("searchProduct").value;
//     document.getElementById("divContainer").innerHTML+=`<li>${foods}</li>`
//     allFoods+=" "+foods;
//     const req = fetch(
//         ` https://data.gov.il/api/3/action/datastore_search?resource_id=c3cb0630-0650-46c1-a068-82d575c094b2&q=${foods}`
//       )
//         .then((response) => response.json())
//         .then((response) => {
//           const data = response.result.records;
//           console.log(data);
//           return data;
//       })
// }

// function btnCalculateFood(allFoods){
//     debugger
//  console.log("CalculateFood");
//  const prod = document.getElementById("foodtxt"); 
//  console.log(allFoods);
//  consol.log(foodList);
// }

function addDate(){
    var modal = document.getElementById("myModal");
    // When the user clicks on the button, open the modal
    btn.onclick = function() {
      modal.style.display = "block";
    }
    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
 }
