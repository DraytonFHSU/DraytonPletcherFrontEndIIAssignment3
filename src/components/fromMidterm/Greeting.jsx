import React, { useState, useEffect } from "react";

export default function Greeting(props) {
  const [greeting, setGreeting] = useState(`Hello ${props.username}! Welcome to React!`);
  const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString()); //State to be updated

  function changeGreeting() {
    setGreeting("Hey there! Hope you're having a great day!"); // Update the greeting state
  }

  return (
    <span>
      <h1>{greeting}</h1>
      <p style={{ color: "red" }}>
        The date is {currentDate}.
      </p>
      <button onClick={changeGreeting}>Change Greeting</button>
    </span>
  );
}
