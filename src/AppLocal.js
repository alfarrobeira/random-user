import React, { useState, useEffect } from "react";
import "./App.css";
import User from "./components/User";
import users from "./users.json";

const AppLocal = () => {
  const [filter, setFilter] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users.results);

  useEffect(() => {
    if (filter === "male")
      setFilteredUsers(users.results.filter((user) => user.gender === "male"));
    else if (filter === "female")
      setFilteredUsers(
        users.results.filter((user) => user.gender === "female")
      );
    else setFilteredUsers(users.results);
  }, [filter]);

  return (
    <div className="App">
      <h1>
        <a href="/instructions.html"> instructions </a>
      </h1>
      <div>
        <button onClick={(e) => setFilter("male")}>Men</button>
        <button onClick={(e) => setFilter("female")}>Women</button>
        <button onClick={(e) => setFilter("")}>Both</button>
      </div>
      {filteredUsers.map((user) => (
        <User key={user.login.uuid} user={user} />
      ))}
    </div>
  );
};

export default AppLocal;
