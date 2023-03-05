import React, { useState, useEffect } from "react";
import "./App.css";
import User from "./components/User";

const URL = "https://randomuser.me/api/";

const App = () => {
  const [gender, setGender] = useState("");
  const [users, setUsers] = useState([]);
  const [resultsNo, setResultsNo] = useState(10);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `${URL}?results=${resultsNo}&gender=${gender}`
        );
        const data = await response.json();
        setUsers(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();

    // compared to using ".then":
    // fetch(`${URL}?results=${resultsNo}&gender=${gender}`)
    //   .then((response) => response.json())
    //   .then((data) => setUsers(data.results));
  }, [gender]);

  return (
    <div className="App">
      <h1>
        <a href="/instructions.html"> instructions </a>
      </h1>
      <div>
        <button onClick={(e) => setGender("male")}>Men</button>
        <button onClick={(e) => setGender("female")}>Women</button>
        <button onClick={(e) => setGender("")}>Both</button>
      </div>
      <div className="container">
        {users.map((user) => (
          <User key={user.login.uuid} user={user} />
        ))}
      </div>
    </div>
  );
};

export default App;
