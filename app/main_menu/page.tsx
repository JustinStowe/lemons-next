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
  const closeModals = () => {
    setPlayModal(false);
    setOptionsModal(false);
    setInstructionModal(false);
  };
  const handleClick = (action: string) => {
    switch (action) {
      case "play":
        closeModals();
        setPlayModal(!playModal);
        break;
      case "options":
        closeModals();
        setOptionsModal(!optionsModal);
        break;
      case "instructions":
        closeModals();
        setInstructionModal(!instructionModal);
        break;
      case "quit":
        router.replace("/");
        break;
      default:
        break;
    }
  };
  return (
    <main>
      <div className=" flex">
        <Button title="Play" onClick={() => handleClick("play")} />
        <Button title="Options" onClick={() => handleClick("options")} />
        <Button
          title="Instructions"
          onClick={() => handleClick("instructions")}
        />
        <Button title="Quit" onClick={() => handleClick("quit")} />
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
