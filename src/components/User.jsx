import React from "react";
import Contact from "./Contact.jsx"

const User = ({ picture, name, dob, ...restOfObject }) => {
    return (
        <div className="user">
            <img src={picture.medium} alt={name.last}></img>
            <h3 style={{ margin: 0 }}>{name.title} {name.first} {name.last} </h3>
            <div><em>Age: </em>{dob.age}</div>
            {/* spread operator ... allows for accessing single props in the child component */}
            <Contact {...restOfObject} />
            <hr />
        </div>
    );
}

export default User;