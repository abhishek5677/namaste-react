import { useEffect, useState } from "react";

const User = ({ name }) => {

    const [count, setcount] = useState(0)
    const [count2] = useState(10)
    
    return (
        <div className="user-card">
            <h1>count: {count}</h1>
            <h1>count2: {count2}</h1>
            <h2>Name: {name}</h2>
            <h4>Location: Mumbai</h4>
            <p>Email: abhishekgarad5677@gmail.com</p>
        </div>
    )
}

export default User;