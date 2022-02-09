import React, {useEffect, useState} from 'react'
import {useQuery, gql} from "@apollo/client"
import {LOAD_USERS} from '../GraphQL/Queries';

function GetUsers() {

    const {error, loading, data} = useQuery(LOAD_USERS);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (data) {
            setUsers(data.getAllUsers) 
            console.log(data.getAllUsers);
        }
    }, [data]);
        
        return (
            <div>
                {" "}
                {users.map((user) => {
                return <h1 id={user.id}> {user.lastName} </h1>;
            })} 
        </div>
        )
}


export default GetUsers;