// alert("Hello😀");

function loginManager()
{
    console.log("in manager");
    const email=document.getElementById("email-manager").value;
    const password=document.getElementById("password").value;
    sessionStorage.setItem("password",password);
    sessionStorage.setItem("email",email);
    //hear need a fetch request
     
    
    window.location.href = "../html/Manager.html";
}

function loginUser()
{
    const userId=document.getElementById("user-id").value;
    
    console.log("in user");
    window.location.href = "../html/userPage.html?userId="+userId;
}

function goToFood(){
    window.location.href = "../html/food.html"
}

