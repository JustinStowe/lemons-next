"use client";
import React, { useState } from "react";
import Button from "../Button";
import { usePlayerState } from "@/app/zustandStores/playerStore";

export default function SuppliesModal() {
  const [lemons, setLemons] = useState(0);
  const [sugar, setSugar] = useState(0);
  const [ice, setIce] = useState(0);
  const [cups, setCups] = useState(0);
  const [lemonCost, setLemonCost] = useState(0.0);
  const [sugarCost, setLSugarCost] = useState(0.0);
  const [iceCost, setIceCost] = useState(0.0);
  const [cupCost, setcupCost] = useState(0.0);
  const [total, setTotal] = useState(0.0);
  const { lemonsStock, sugarStock, iceStock, cupsStock } = usePlayerState();

  const handleClick = (action: string) => {
    switch (action) {
      case "submit":
        break;

      case "moreLemons":
        setLemons(lemons + 12);
        setLemonCost(lemonCost + 6.0);
        setTotal(total + 6.0);
        break;
      case "lessLemons":
        if (lemons === 0) {
          break;
        } else {
          setLemons(lemons - 12);
          setLemonCost(lemonCost - 6.0);
          setTotal(total - 6.0);
        }
        break;
      case "moreSugar":
        setSugar(sugar + 15);
        setLSugarCost(sugarCost + 5.1);
        setTotal(total + 5.1);
        break;
      case "lessSugar":
        if (sugar === 0) {
          break;
        } else {
          setSugar(sugar - 15);
          setLSugarCost(sugarCost - 5.1);
          setTotal(total - 5.1);
        }
        break;
      case "moreIce":
        setIce(ice + 50);
        setIceCost(iceCost + 3.5);
        setTotal(total + 3.5);
        break;
      case "lessIce":
        if (ice === 0) {
          break;
        } else {
          setIce(ice - 50);
          setIceCost(iceCost - 3.5);
          setTotal(total - 3.5);
        }
        break;
      case "moreCups":
        setCups(cups + 10);
        setcupCost(cupCost + 0.8);
        setTotal(total + 0.8);
        break;
      case "lessCups":
        if (cups === 0) {
          break;
        } else {
          setCups(cups - 10);
          setcupCost(cupCost - 0.8);
          setTotal(total - 0.8);
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
          <Button title="remove" onClick={() => handleClick("lessLemons")} />
          <span>{lemons}</span>
          <Button
            title="buy 12 for $6.00"
            onClick={() => handleClick("moreLemons")}
          />
          <span>Cost: $ {lemonCost.toFixed(2)}</span>
        </div>
        <h2>Sugar</h2>
        <div>
          <Button title="remove" onClick={() => handleClick("lessSugar")} />
          <span>{sugar}</span>
          <Button
            title="buy 15 for $ 5.10"
            onClick={() => handleClick("moreSugar")}
          />
          <span>Cost: $ {sugarCost.toFixed(2)}</span>
        </div>
        <h2>Ice</h2>
        <div>
          <Button title="remove" onClick={() => handleClick("lessIce")} />
          <span>{ice}</span>
          <Button
            title="buy 50 for $ 3.50"
            onClick={() => handleClick("moreIce")}
          />
          <span>Cost: $ {iceCost.toFixed(2)}</span>
        </div>
        <h2>Cups</h2>
        <div>
          <Button title="remove" onClick={() => handleClick("lessCups")} />
          <span>{cups}</span>
          <Button
            title="buy 10 for $0.80"
            onClick={() => handleClick("moreCups")}
          />
          <span>Cost: $ {cupCost.toFixed(2)}</span>
        </div>
        <h1>Total: {total.toFixed(2)}</h1>
      </section>
      <div className="flex justify-center">
        <Button title="submit" onClick={() => handleClick("submit")} />
      </div>
    </div>
  );
}
