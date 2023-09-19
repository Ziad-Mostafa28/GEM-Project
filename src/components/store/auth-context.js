import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Contextapi = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        async function getUsers() {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setUsers(response.data)
                console.log(response);
            } catch (error) {
                setError(error.message)
            }
        }
        getUsers();

    }, [])

    const newData = users.map((usernewdata) => {
        return (
            <div key={usernewdata.id}>
                <h1>{usernewdata.name}</h1>
                <p><strong>Email:{usernewdata.email}</strong></p>
                <div>
                    <p>{usernewdata.address.city}</p>
                </div>
            </div>
        )
    })


    console.log(users);
    return (

        <div>
            <div>
                {error ? error : ""}
                {newData}
            </div>
        </div>
    )
}

export default Contextapi;
