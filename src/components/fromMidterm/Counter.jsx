import React, { useState, useEffect } from "react";

export default function Greeting(props) {
  const [count, bigCount] = useState(0);

    function addCount() {
        bigCount(prevCount => prevCount+1)
    };


  return (
    <span>
        <button
        type="text"
        value={0}
        onClick={addCount}
        placeholder="Name Change"
       >Click me! Count = {count}</button>
      
    </span>
  );
}
