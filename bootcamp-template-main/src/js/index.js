// alert("Hello😀");

function loginManager()
{
    console.log("in manager");
    // const email=document.getElementById("emailAddress").value;
    const password=document.getElementById("password").value;
    sessionStorage.setItem("password",password);

    //hear need a fetch request
     
    
    window.location.href = "../html/Manager.html";
}

function loginUser()
{
    const password=document.getElementById("password").value;
    
    console.log("in user");
    window.location.href = "../html/userPage.html?password="+password;
}

function goToFood(){
    window.location.href = "../html/food.html"
}

