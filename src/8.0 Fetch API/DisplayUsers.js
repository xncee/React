import { useState, useEffect } from 'react';
import Axios from 'axios';

const RANDOM_USER_URL = 'https://randomuser.me/api/';

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
const getUser1 = async () => {
    const response = await fetch(RANDOM_USER_URL);
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    
    return json;
};

// https://axios-http.com/docs/intro
const getUser2 = async () => {
    try {
        const res = await Axios.get(RANDOM_USER_URL);
        return res.data;
    } catch (error) {
        console.error(error);
    }
}

function DisplayUsers() {
    const [users, setUsers] = useState([]);
    //getUser2();
    const fetchNewUser = async () => {
        const data = await getUser2();
        const newUser = data.results[0];
        setUsers([...users, newUser]);
    };

    return (
        <div>
            <button
                onClick={fetchNewUser}
            >
                Fetch User
            </button>
            {users.map((user, i) => {
                return (<div key={i}>
                    <h1>{user.name.title} {user.name.first} {user.name.last}</h1>
                    <ul>
                        <li>Gender: {user.gender}</li>
                        <li>DOB: {user.dob.date}</li>
                        <li>Email: {user.email}</li>
                        <li>Phone: {user.phone}</li>
                    </ul>
                </div>);
            })}
        </div>
    );
}

export default DisplayUsers;