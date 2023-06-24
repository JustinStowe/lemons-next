"use client";
import React from "react";
import Button from "../Button";
import { useRouter } from "next/navigation";
function PlayModel() {
  const router = useRouter();
  const handleClick = (action: string) => {
    switch (action) {
      case "newGame":
        router.replace("/player_screen");
        break;
      case "Continue":
        router.replace("/player_screen");
    }
  };
  return (
    <div>
      <h2>Select a new game or load your saved game</h2>
      <div>
        <Button title="New game" onClick={() => handleClick("newGame")} />
        <Button title="Continue" onClick={() => handleClick("Continue")} />
      </div>
    </div>
  );
}

export default PlayModel;
