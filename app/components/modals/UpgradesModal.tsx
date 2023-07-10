import React from "react";
import upgrades from "../../../data/upgrades.json";
import Button from "../Button";

export default function UpgradesModal() {
  //need to use zustand for player state management.
  //need to check player inventory
  //for all upgrades that exist in player inventory, render a sell button, otherwise render a buy button.
  //when buying or selling upgrades, need to update player inventory accordingly.
  const handleClick = (action: string) => {
    switch (action) {
      case "Umbrella":
        break;
      case "Ice Machine":
        break;
      case "Boom-Box":
        break;
      case "Juicer":
        break;
      case "Cash Register":
        break;
      case "Fridge":
        break;
      default:
        break;
    }
  };
  return (
    <div>
      <h2>Upgrades</h2>
      <ul>
        {upgrades.map((upgrade, index) => {
          return (
            <li key={index}>
              <div>
                <h2>{upgrade.name}</h2>
                <span>Cost: {upgrade.cost}</span>
              </div>
              <Button title="buy" onClick={() => handleClick(upgrade.name)} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
