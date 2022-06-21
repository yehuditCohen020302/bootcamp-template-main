// alert("Hello😀");

function loginManager()
{
    console.log("in manager");
    email=document.getElementById("emailAddress").value;
    sessionStorage.setItem("userEmail",email);
    window.location.href = "/src/Manager.html";
}

function loginUser()
{
    email=document.getElementById("emailAddress").value;
    console.log("in user");
    window.location.href = "/src/userPage.html?emailAddress="+email;
}

