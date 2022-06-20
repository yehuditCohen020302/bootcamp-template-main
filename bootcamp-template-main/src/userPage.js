
function loadUser(){
    this.currentUser=new User("michal","soloveitchik","jerusalem","mevo-livna",2,"058-3231859","859michal@gmail.com",1.68,60);
    this.currentUser.addWeight(55);
    BMI=this.currentUser.weightsHistory[this.currentUser.weightsHistory.length-1].weight/(Math.pow(currentUser.height,2));
    document.getElementById("firstName").value=this.currentUser.firstName;
    document.getElementById("lastName").value=this.currentUser.lastName;
    document.getElementById("city").value=this.currentUser.city;
    document.getElementById("street").value=this.currentUser.street;
    document.getElementById("houseNumber").value=this.currentUser.houseNumber;
    document.getElementById("phoneNumber").value=this.currentUser.phoneNumber;
    document.getElementById("emailAddress").value=this.currentUser.emailAddress;
    document.getElementById("height").value=this.currentUser.height;
    // document.getElementById("weight").value=this.currentUser.weightsHistory[this.currentUser.weightsHistory.length-1].weight;
    document.getElementById("BMI").value=BMI;
    
    this.currentUser.weightsHistory.forEach(meeting => {
        const tmp=document.getElementsByTagName("template")[0];
        let element=tmp.content.cloneNode(true);
        console.log(meeting)
        element.querySelector(".date").innerText=meeting.date;
        element.querySelector(".weight").innerText=meeting.weight;
        const weightsTable=document.getElementById('weights');
        weightsTable.append(meeting);
    });
    
    // inputs=document.getElementsByClassName("details").style.readonly="true";
}
