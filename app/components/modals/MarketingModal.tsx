import React from "react";
import marketing from "../../../data/Marketing.json";
import Button from "../Button";
export default function MarketingModal() {
  //zustand makes call to database to check what marketing is in effect
  //for marketing methods in effect, remove buy button and replace with remaing duration-1
  //rerender everytime marketing method is bought.
  const handleClick = (action: string) => {
    switch (action) {
      case "flyer":
        console.log("flyer clicked");
        break;
      case "social media":
        console.log("social media clicked");
        break;
      case "newspaper":
        console.log("newspaper clicked");
        break;
      case "radio":
        console.log("radio clicked");
        break;
      case "TV":
        console.log("TV clicked");
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h2>Choose your marketing tactics</h2>
      <ul>
        {marketing.map((tactic, index) => {
          return (
            <li key={index}>
              <div>
                <h2>{tactic.name}</h2>
                <span>Cost: {tactic.cost}</span>
              </div>
              <Button title="buy" onClick={() => handleClick(tactic.name)} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
