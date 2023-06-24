"use client";
import { useState } from "react";
import Button from "../components/Button";
import { useRouter } from "next/navigation";
import React from "react";
import PlayModel from "../components/modals/PlayModal";
import OptionsModel from "../components/modals/OptionsModal";
import InstructionsModel from "../components/modals/InstructionsModal";
import InformationModal from "../components/modals/InformationModal";

export default function MainMenu() {
  const router = useRouter();
  const [playModal, setPlayModal] = useState(false);
  const [optionsModal, setOptionsModal] = useState(false);
  const [instructionModal, setInstructionModal] = useState(false);
  const handlePlayClick = () => {
    console.log("play button clicked");
    setPlayModal(!playModal);
    setOptionsModal(false);
    setInstructionModal(false);
  };
  const handleOptionsClick = () => {
    console.log("options button clicked");
    setOptionsModal(!optionsModal);
    setInstructionModal(false);
    setPlayModal(false);
  };
  const handleInstructionsClick = () => {
    console.log("instruction button clicked");
    setInstructionModal(!instructionModal);
    setOptionsModal(false);
    setPlayModal(false);
  };
  const handleQuitClick = () => {
    console.log("quit button clicked");
    router.push("/");
  };
  return (
    <main>
      <div className=" flex">
        <Button title="Play" OnClick={handlePlayClick} />
        <Button title="Options" OnClick={handleOptionsClick} />
        <Button title="Instructions" OnClick={handleInstructionsClick} />
        <Button title="Quit" OnClick={handleQuitClick} />
      </div>
      <div className="flex text-center justify-center">
        <div>
          {playModal ? <PlayModel /> : null}
          {optionsModal ? <OptionsModel /> : null}
          {instructionModal ? <InstructionsModel /> : null}
        </div>
        <div className="ml-auto flex-shrink-0">
          <InformationModal />
        </div>
      </div>
    </main>
  );
}
