const baseUrl = "https://pacific-headland-08901.herokuapp.com/";

 export function getUsers() {
    debugger
    fetch(baseUrl+"users")
      .then((response) => response.json())
      .then((response) => console.log(response))
    //    .then((response) => { (usersTo = response)})
      .then((response) => drawTable(response))
      .catch((err) => {
        console.log(err);
      });

}

 function drawTable(users) {
    debugger
    console.log(users);
    const container = document.querySelector(".usersTable");
    container.innerHTML = "";
    let table = "";

    users.forEach((user) => {
      let bmi =
        user.weightsHistory[user.weightsHistory.length - 1].weight /
        Math.pow(user.height, 2);
      let c = "green";
      if (
        user.weightsHistory[user.weightsHistory.length - 1].weight >
        user.weightsHistory[user.weightsHistory.length - 2].weight
      ) {
        c = "red";
      }
      table += `
                <tr>
                    <th>${user.firstName + " " + user.lastName}</th>
                    <th style="color:${c}">${Math.floor(bmi * 100) / 100}</th>
                    <th><a href="../html/userPage.html?userId=${user.id}">details user</a></th>
                </tr>`;
    });
    
    container.innerHTML += table;
}