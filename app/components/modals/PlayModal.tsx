"use client";
import React from "react";
import Button from "../Button";
import { useRouter } from "next/navigation";
function PlayModel() {
  const router = useRouter();
  const handleNewgameClick = () => {
    router.replace("/");
  };
  const handleLoadgameClick = () => {
    router.replace("/");
  };
  return (
    <div>
      <h2>Select a new game or load your saved game</h2>
      <div>
        <Button title="New game" OnClick={handleNewgameClick} />
        <Button title="Load game" OnClick={handleLoadgameClick} />
      </div>
    </div>
  );
}

export default PlayModel;
