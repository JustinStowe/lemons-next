import React from "react";
import Hirelings from "../../../data/Hirelings.json";
import Button from "../Button";

export default function StaffModal() {
  //have zustand check player inventory for any staff already hired.
  //for all staff that exist in player inventory, render a fire button, otherwise render a hire button
  // rerender page when hiring or firing staff occurs

  const handleClick = (action: string) => {
    switch (action) {
      case "Timmy":
        console.log("Timmy Clicked");
        break;
      case "Bobby":
        console.log("Bobby Clicked");
        break;
      case "Jennifer":
        console.log("Jennifer Clicked");
        break;
      case "Ron Popeil":
        console.log("Ron Popeil Clicked");
        break;
      case "Dale Carnegie":
        console.log("Dale Carnegie Clicked");
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <h2>Hire, review, and fire staff members</h2>
      <ul>
        {Hirelings.map((hireling, index) => {
          return (
            <li key={index}>
              <div>
                <h2> {hireling.name}</h2>
                <span> Cost: {hireling.cost}</span>
              </div>
              <Button title="Hire" onClick={() => hireling.name} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
