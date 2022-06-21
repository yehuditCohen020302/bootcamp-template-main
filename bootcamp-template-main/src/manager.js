 class Manager{
    constructor(firstName, lastName ,emailAddress){
    
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
        this.getUsers();
    }

    sortByName(data){
        debugger
        const xhr = new XMLHttpRequest();
       
        xhr.open("GET", 'http://localhost:3000/users');
        xhr.send();
        xhr.onload = function () {
            if (xhr.status != 200) {
                alert(`Error ${xhr.status}: ${xhr.statusText}`);
            } else {
                let users = JSON.parse(xhr.responseText);
                let table = '';
                users.forEach(user => {
                    debugger
                  if(user.firstName===data) 
                  {
                     table += `
                        <tr>
                            <th>${user.firstName + ' ' + user.lastName}</th>
                           
                            <th><button onClick="details()">Details</button></th>
                        </tr>`
                  }
                  const container = document.querySelector('.usersTable');
                container.innerHTML += table;
                })
                
            }
        }
    }

    

    getUsers(){
        const xhr = new XMLHttpRequest();
       
        xhr.open("GET", 'http://localhost:3000/users');
        xhr.send();
        xhr.onload = function () {
            if (xhr.status != 200) {
                alert(`Error ${xhr.status}: ${xhr.statusText}`);
            } else {
                let users = JSON.parse(xhr.responseText);
                let table = '';
                users.forEach(user => {
                    table += `
                    <tr>
                        <th>${user.firstName + ' ' + user.lastName}</th>
                        <th>${user.weightsHistory[user.weightsHistory.length-1]
                            .weight/(Math.pow(user.height,2))}</th>
                        <th><button onClick="details()">Details</button></th>
                    </tr>`
                })
                const container = document.querySelector('.usersTable');
                container.innerHTML += table;
            }
        }
    }

    details(){
        const xhr = new XMLHttpRequest();
       
        xhr.open("GET", 'http://localhost:3000/users');
        xhr.send();
        xhr.onload = function () {
            if (xhr.status != 200) {
                alert(`Error ${xhr.status}: ${xhr.statusText}`);
            } else {
                let users = JSON.parse(xhr.responseText);
                let div='';
                users.forEach(user => {
                    //התנאי פה הוא סתם תנאי צריך לראות איך אפשר להציג את המשתמש הזה
                    if(user.email===sessionStorage.getItem('userEmail')) 
                    {
                        console.log(`User: ${user.firstName}`);
                        div+=`<p>
                        ${user.firstName + ' ' + user.lastName + ' ' + user.email} </p>`
                    }
                })
                const container = document.querySelector('.div');
                container.innerHTML += div;
            }
        }
    }

    OKaddUser(){

        //create new user object
        let user= new User(document.getElementById("userId").value,
                            document.getElementById("firstName").value,
                            document.getElementById("lastName").value,
                            document.getElementById("city").value,
                            document.getElementById("street").value,
                            document.getElementById("houseNumber").value,
                            document.getElementById("phoneNumber").value,
                            document.getElementById("emailAddress").value,
                            document.getElementById("height").value,
                            document.getElementById("beginingWeight").value );

        let userTo=JSON.stringify(user);
        console.log(userTo);
         sessionStorage.setItem("currentUser",userTo);
         //and push the new user to the json file...
        this.addedUser();
    }

    addedUser(){
        debugger
        const xhr = new XMLHttpRequest();
       
        let body=JSON.stringify(sessionStorage.getItem("currentUser"));
        debugger
        console.log(body);  
        xhr.open("POST", 'http://localhost:3000/users');
        xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        
        xhr.send(body);
        
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
function details(){ 
    manager.details();
}
function sortByName(){
    const data=document.getElementById("sortByName").value; 
    manager.sortByName(data);
 }
 