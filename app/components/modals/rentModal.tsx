import React from "react";
import Button from "../Button";
export default function rentModal() {
  //need carousel of cards with information and an image.
  //on selection of location, need to update player_screen with selection
  const handleClick = (action: string) => {
    switch (action) {
      case "select":

      case "next":

      case "previous":
    }
  };
  return (
    <div>
      <h2>Choose the location you wish to set up your lemonade stand</h2>
      <div>
        <Button title="previous" onClick={() => handleClick("previous")} />
        <Button title="select" onClick={() => handleClick("select")} />
        <Button title="next" onClick={() => handleClick("next")} />
      </div>
    </div>
  );
}
