'use client'

import { useState, useEffect } from "react"
import { searchUsers } from "../actions/user-actions";

export default function UsersPage() {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        // 방법1
        // fetch(`/api/users?name=${"Alice"}`)
        // .then(response => response.json())
        // .then(data => setUsers(data.users))
        // .catch(error => console.error('Error:', error))

        //방법2 (Server Actions)
        searchUsers('Alice').then((data) => setUsers(data))
    
    }, [])

    return <main>
        <hr />
        <h1>Users 결과</h1>
        {users.map((user) => (
            <p key={user.id}>이름: {user.name}</p>
        ))}
    </main>

}