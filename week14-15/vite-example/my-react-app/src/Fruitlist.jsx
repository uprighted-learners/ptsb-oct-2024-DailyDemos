import React from "react";

function FruitList() {
  //this is js
  // we don't have have props in order to use variables
  const fruits = ["Apple", "Banana", "Cherry", "Date"]; //this is js
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key="1">{fruit}</li>
      ))}
    </ul>
  );
}

export default FruitList;
