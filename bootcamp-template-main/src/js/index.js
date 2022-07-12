const baseUrl = "https://pacific-headland-08901.herokuapp.com/";
function loginManager() {
  const email = document.getElementById("email-manager").value;
  const password = document.getElementById("password").value;

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    email: email,
    password: password,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(baseUrl + "account/login", requestOptions)
    .then((response) => response.text())
    .then((result) => JSON.parse(result))
    .then((result) => {
      if (result.id > 0) {
        sessionStorage.setItem("userEmail", result.emailAddress);
        console.log("in manager");
        window.location.href = "../html/Manager.html";
      }
    })
    .catch((error) => {
        console.log("error", error);
        console.log("you have no access to this page 😱");
    });

  //hear need a fetch request

  //   window.location.href = "../html/Manager.html";
}

function loginUser() {
  const userId = document.getElementById("user-id").value;

  console.log("in user");
  window.location.href = "../html/userPage.html?userId=" + userId;
}

function goToFood() {
  window.location.href = "../html/food.html";
}
