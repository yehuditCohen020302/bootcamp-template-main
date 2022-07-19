const userModel = require('../models/user.model');
const userService= require('../services/user.service')
const sinon = require('sinon');
const { expect } = require('chai');

test('getUsers returns an array', () => {
    const result = userService.getAllUsers();
    expect(typeof result).equal(typeof Array())
});



test('findOne returns an user',async () => {
    const userObject={
        id:1,
        firstName: 'John',
        lastName: 'Doe',
        city:'String',
        street:'String',
        houseNumber:1,
        phoneNumber:'String',
        emailAddress: 'john@example.com',
        height:1
    }
    const id=1;

    sinon.stub(userModel, 'findOne').returns(userObject);
    const returnedUser = await userService.getOneUser(id);
    console.log(returnedUser);
    expect(returnedUser).equal(userObject);
    // expect(returnedUser.firstName).equal(userObject.firstName);
    // expect(returnedUser.emailAddress).toMatch(userObject.emailAddress);
});


