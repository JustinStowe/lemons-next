"use client";
import React, { useState, useEffect } from "react";
import Button from "../components/Button";

export default function PlayerScreen() {
  //should use zustand to track player inventory state.
  const [statsModal, setStatsModal] = useState(false);
  const [rentModal, setRentModal] = useState(false);
  const [upgradeModal, setUpgradeModal] = useState(false);
  const [staffModal, setStaffModal] = useState(false);
  const [marketingModal, setMarketingModal] = useState(false);
  const [suppliesModal, setSuppliesModal] = useState(false);

  const handleClick = (action: string) => {
    switch (action) {
      case "stats":
        setStatsModal(!statsModal);
        break;
      case "rent":
        setRentModal(!rentModal);
        break;
      case "upgrades":
        setUpgradeModal(!upgradeModal);
        break;
      case "staff":
        setStaffModal(!staffModal);
        break;
      case "marketing":
        setMarketingModal(!marketingModal);
        break;
      case "supplies":
        setSuppliesModal(!suppliesModal);
      default:
        break;
    }
  };

  return (
    <main>
      <div>
        <Button title="stats" onClick={() => handleClick("stats")} />
        <Button title="rent" onClick={() => handleClick("rent")} />
        <Button title="upgrades" onClick={() => handleClick("upgrades")} />
        <Button title="staff" onClick={() => handleClick("staff")} />
        <Button title="marketing" onClick={() => handleClick("marketing")} />
        <Button title="supplies" onClick={() => handleClick("supplies")} />
      </div>
    </main>
  );
}
