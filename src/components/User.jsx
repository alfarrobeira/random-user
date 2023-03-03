import React from "react";
import Contact from "./Contact.jsx"

const User = ({ user }) => {
    return (
        <>
            <img src={user.picture.medium} alt={user.name.last}></img>
            <h3 style={{ margin: 0 }}>{user.name.title} {user.name.first} {user.name.last} </h3>
            <Contact address={user.location} email={user.email} phone={user.phone} cell={user.cell} />
            <hr />
        </>
    );
}

export default User;