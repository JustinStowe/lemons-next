"use client";
import React, { useState } from "react";
import Button from "../Button";

export default function SuppliesModal() {
  const [lemons, setLemons] = useState(0);
  const [sugar, setSugar] = useState(0);
  const [ice, setIce] = useState(0);
  const [cups, setCups] = useState(0);

  const handleClick = (action: string) => {
    switch (action) {
      case "submit":
        break;

      case "moreLemons":
        setLemons(lemons + 12);
        break;
      case "lessLemons":
        if (lemons === 0) {
          break;
        } else {
          setLemons(lemons - 1);
        }
        break;
      case "moreSugar":
        setSugar(sugar + 15);
        break;
      case "lessSugar":
        if (sugar === 0) {
          break;
        } else {
          setSugar(sugar - 1);
        }
        break;
      case "moreIce":
        setIce(ice + 50);
        break;
      case "lessIce":
        if (ice === 0) {
          break;
        } else {
          setIce(ice - 1);
        }
        break;
      case "moreCups":
        setCups(cups + 10);
        break;
      case "lessCups":
        if (cups === 0) {
          break;
        } else {
          setCups(cups - 1);
        }
        break;
      default:
        break;
    }
  };
  //zustand makes database call for most recent recipe numbers.
  //zustand returns most up to date data
  //render most up to date data.
  //real time rendering of recipe numbers.
  //on submit, have zustand take updated data and update database.
  return (
    <div>
      <h1>Buy supplies</h1>
      <section className="flex flex-col justify-center content-center ">
        <h2> Lemons</h2>
        <div>
          {/* <Button title="less" onClick={() => handleClick("lessLemons")} />{" "} */}
          <span>{lemons}</span>
          <Button title="buy 12" onClick={() => handleClick("moreLemons")} />
        </div>
        <h2>Sugar</h2>
        <div>
          {/* <Button title="less" onClick={() => handleClick("lessSugar")} /> */}
          <span>{sugar}</span>
          <Button title="buy 15" onClick={() => handleClick("moreSugar")} />
        </div>
        <h2>Ice</h2>
        <div>
          {/* <Button title="less" onClick={() => handleClick("lessIce")} /> */}
          <span>{ice}</span>
          <Button title="buy 50" onClick={() => handleClick("moreIce")} />
        </div>
        <h2>Cups</h2>
        <div>
          {/* <Button title="less" onClick={() => handleClick("lessCups")} /> */}
          <span>{cups}</span>
          <Button title="buy 10" onClick={() => handleClick("moreCups")} />
        </div>
      </section>
      <div className="flex justify-center">
        <Button title="submit" onClick={() => handleClick("submit")} />
      </div>
    </div>
  );
}
