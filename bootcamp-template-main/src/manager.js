 class Manager{

    oReq = new XMLHttpRequest()

    constructor(firstName, lastName, city,street, houseNumber,phoneNumber,emailAddress){
    
        this.firstName   =firstName,
        this.lastName    =lastName,
        this.emailAddress=emailAddress
    }

    search(text) {
        this.oReq("get", )
    }

    login(){
        console.log("We Entry");
        var email=sessionStorage.getItem("userEmail");
        document.getElementById("email").innerHTML=`hello to ${email}`;
        console.log(email);
    }

    OKaddUser(){

        //create new user object
        let user= new User(document.getElementById("firstName").value,
                            document.getElementById("lastName").value,
                            document.getElementById("city").value,
                            document.getElementById("street").value,
                            document.getElementById("houseNumber").value,
                            document.getElementById("phoneNumber").value,
                            document.getElementById("emailAddress").value,
                            document.getElementById("height").value,
                            document.getElementById("beginingWeight").value );

        // JSON.stringify(user);
        console.log(user);
        //and push the new user to the json file...
         sessionStorage.setItem("currentUser",user); //JSON.parse(user)
    }

}

  let manager=new Manager();

 function login(){
   manager.login();  
 }
 function addUser(){
    console.log("addUser Entry");
        document.getElementById("userToAdd").style.display = "block";
 }
 function OKaddUser(){
    manager.OKaddUser();
 }