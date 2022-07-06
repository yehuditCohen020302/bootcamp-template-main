// alert("Hello😀");

function loginManager()
{
    console.log("in manager");
    email=document.getElementById("emailAddress").value;
    sessionStorage.setItem("userEmail",email);
    window.location.href = "../html/Manager.html";
}

function loginUser()
{
    email=document.getElementById("emailAddress").value;
    console.log("in user");
    window.location.href = "../html/userPage.html?emailAddress="+email;
}

function goToFood(){
    window.location.href = "../html/food.html"
}

