class User {
  comments;
  weightsHistory = [];
  constructor(
    id,
    firstName,
    lastName,
    city,
    street,
    houseNumber,
    phoneNumber,
    emailAddress,
    height,
    beginingWeight
  ) {
    (this.id = id),
      (this.firstName = firstName),
      (this.lastName = lastName),
      (this.city = city),
      (this.street = street),
      (this.houseNumber = houseNumber),
      (this.phoneNumber = phoneNumber),
      (this.emailAddress = emailAddress),
      (this.height = height),
      this.addMeeting(beginingWeight);
  }
  addMeeting(newWeight) {
    var currentWeight = new meeting(new Date(), newWeight);
    this.weightsHistory.push(currentWeight);
  }
}
