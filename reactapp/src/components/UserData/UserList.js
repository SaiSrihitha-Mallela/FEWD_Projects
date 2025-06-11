import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    // Runs once on mount
    useEffect(() => {
        console.log("🟡 Component Mounted: Fetching user data...");

        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                console.log("🟢 Data fetched successfully!");
                setUsers(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("🔴 Error fetching data:", error);
                setLoading(false);
            });

        return () => {
            console.log("🔵 Component Unmounted");
        };
    }, []);

    // Runs when 'users' is updated
    useEffect(() => {
        if (users.length > 0) {
            console.log("🟠 Users state updated");
        }
    }, [users]);

    return (
        <div>
            <h2>User List</h2>
            {loading ? (
                <p>Loading users...</p>
            ) : (
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>
                            {user.name} - {user.email}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default UserList;
