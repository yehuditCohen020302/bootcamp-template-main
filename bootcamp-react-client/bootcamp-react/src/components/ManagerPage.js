// import React, { useState } from 'react';
// import axios from 'axios';
import {getUsers} from "../api/manager"

export default function ManagerPage()
{
    console.log("i'm in");

    return (
        <div className='containers'>
            <h1>"Welcome to Manager"</h1>
            <button onClick={getUsers}>Click me to load all users</button>
            <table className='usersTable'></table>
            <div className='div'></div>
        </div>
    )
}
 /* <div>  <h1>Hello in ManagerPage 😊</h1></div> */

// function componentDidMount() {
//     axios.get(baseUrl+`users`)
//     .then(res=> {
//         const person=res.data;
//         this.setPersons({person});
//     });}

