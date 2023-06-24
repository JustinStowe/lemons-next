"use client";
import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import { useRouter } from "next/navigation";
import UpgradesModal from "../components/modals/UpgradesModal";
import StaffModal from "../components/modals/StaffModal";
import MarketingModal from "../components/modals/MarketingModal";
import SuppliesModal from "../components/modals/SuppliesModal";
import RentModal from "../components/modals/rentModal";
import StatsModal from "../components/modals/statsModal";
export default function PlayerScreen() {
  //should use zustand to track player inventory state.
  const router = useRouter();
  const [statsModal, setStatsModal] = useState(false);
  const [rentModal, setRentModal] = useState(false);
  const [upgradeModal, setUpgradeModal] = useState(false);
  const [staffModal, setStaffModal] = useState(false);
  const [marketingModal, setMarketingModal] = useState(false);
  const [suppliesModal, setSuppliesModal] = useState(false);

  const closeModals = () => {
    setStatsModal(false);
    setRentModal(false);
    setUpgradeModal(false);
    setStaffModal(false);
    setMarketingModal(false);
    setSuppliesModal(false);
  };
  const handleClick = (action: string) => {
    switch (action) {
      case "stats":
        closeModals();
        setStatsModal(!statsModal);
        break;
      case "rent":
        closeModals();
        setRentModal(!rentModal);
        break;
      case "upgrades":
        closeModals();
        setUpgradeModal(!upgradeModal);
        break;
      case "staff":
        closeModals();
        setStaffModal(!staffModal);
        break;
      case "marketing":
        closeModals();
        setMarketingModal(!marketingModal);
        break;
      case "supplies":
        closeModals();
        setSuppliesModal(!suppliesModal);
      case "save game":
        //logic to save data to database.
        break;
      case "Main Menu":
        router.replace("/main_menu");
        break;
      case "start day":
        //make database update and pull then redirect to day of business page
        console.log("start day button pushed");
        break;
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
      <section>
        <div>
          {statsModal ? <StatsModal /> : null}
          {rentModal ? <RentModal /> : null}
          {upgradeModal ? <UpgradesModal /> : null}
          {staffModal ? <StaffModal /> : null}
          {marketingModal ? <MarketingModal /> : null}
          {suppliesModal ? <SuppliesModal /> : null}
        </div>
      </section>
      <footer>
        <div>
          <Button title="save game" onClick={() => handleClick("save game")} />
          <Button title="Main Menu" onClick={() => handleClick("Main Menu")} />
          <Button title="start day" onClick={() => handleClick("start day")} />
        </div>
      </footer>
    </main>
  );
}
