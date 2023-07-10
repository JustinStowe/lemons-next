import React, { useState } from "react";
import Button from "../Button";
import locations from "../../../data/locations.json";
import Image from "next/image";

export default function RentModal() {
  const [currentLocationIndex, setCurrentLocationIndex] = useState(0);

  const handleSelect = () => {
    const selectedLocation = locations[currentLocationIndex];
    // Update player_screen with the selected location
    // ...
  };

  const handleNext = () => {
    setCurrentLocationIndex((prevIndex) =>
      prevIndex === locations.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentLocationIndex((prevIndex) =>
      prevIndex === 0 ? locations.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <h2>Choose the location you wish to set up your lemonade stand</h2>
      <div>
        <div>
          <p>{locations[currentLocationIndex].name}</p>
          <span>Rent: {locations[currentLocationIndex].rent}</span>
          <Image
            src={locations[currentLocationIndex].image}
            alt={locations[currentLocationIndex].name}
            width={500}
            height={300}
          />
          <p>Info: {locations[currentLocationIndex].info}</p>
        </div>
        <Button title="previous" onClick={handlePrevious} />
        <Button title="select" onClick={handleSelect} />
        <Button title="next" onClick={handleNext} />
      </div>
    </div>
  );
}
