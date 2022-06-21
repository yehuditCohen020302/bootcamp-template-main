 class User{
    comments;
    weightsHistory=[];
    constructor(firstName, lastName,city,street,houseNumber,phoneNumber,emailAddress,height,beginingWeight){
        this.firstName      =firstName,
        this.lastName       =lastName,
        this.city           =city,
        this.street         =street,
        this.houseNumber    =houseNumber,
        this.phoneNumber    =phoneNumber,
        this.emailAddress   =emailAddress,
        this.height         =height,
        this.addWeight(beginingWeight)
    }
    addWeight(newWeight){
        var currentWeight=new weight(new Date(),newWeight)
        this.weightsHistory.push(currentWeight)
    }
}