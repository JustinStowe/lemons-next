"use client";
import React, { useState } from "react";
import Button from "../Button";
export default function RecipeModal() {
  const [lemons, setLemons] = useState(0);
  const [sugar, setSugar] = useState(0);
  const [ice, setIce] = useState(0);
  const [cupPrice, setCupPrice] = useState(0.0);

  const handleClick = (action: string) => {
    switch (action) {
      case "submit":

      case "moreLemons":
        setLemons(lemons + 1);
        break;
      case "lessLemons":
        if (lemons === 0) {
          alert("you can't put negative lemons into your recipe");
        } else {
          setLemons(lemons - 1);
        }
        break;
      case "moreSugar":
        setSugar(sugar + 1);
        break;
      case "lessSugar":
        if (sugar === 0) {
          alert("you can't put negative Sugar into your recipe");
        } else {
          setSugar(sugar - 1);
        }
        break;
      case "moreIce":
        setIce(ice + 1);
        break;
      case "lessIce":
        if (ice === 0) {
          alert("you can't put negative Ice into your recipe");
        } else {
          setIce(ice - 1);
        }
        break;
      case "minus":
        if (cupPrice >= 0.1) {
          setCupPrice(cupPrice - 0.1);
        } else {
          alert(
            "I am sure your lemonade is not so bad that you have to pay people to drink it"
          );
        }
        break;
      case "plus":
        setCupPrice(cupPrice + 0.1);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h1>Adjust your recipe (per pitcher)</h1>
      <section>
        <h2>Lemons</h2>
        <div>
          <Button title="less" onClick={() => handleClick("lessLemons")} />{" "}
          <span>{lemons}</span>
          <Button title="more" onClick={() => handleClick("moreLemons")} />
        </div>
        <h2>Sugar</h2>
        <div>
          <Button title="less" onClick={() => handleClick("lessSugar")} />
          <span>{sugar}</span>
          <Button title="more" onClick={() => handleClick("moreSugar")} />
        </div>
        <h2>Ice</h2>
        <div>
          <Button title="less" onClick={() => handleClick("lessIce")} />
          <span>{ice}</span>
          <Button title="more" onClick={() => handleClick("moreIce")} />
        </div>
      </section>
      <section>
        <h1>One pitcher makes 5 cups of Lemonade</h1>
        <h2>Price per Cup</h2>
        <div>
          <Button title="minus" onClick={() => handleClick("minus")} />{" "}
          <span>{cupPrice.toFixed(2)}</span>
          <Button title="plus" onClick={() => handleClick("plus")} />
        </div>
      </section>
      <div className="flex justify-center">
        <Button title="submit" onClick={() => handleClick("submit")} />
      </div>
    </div>
  );
}
