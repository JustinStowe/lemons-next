"use client";
import React, { useState, useEffect } from "react";

export default function InformationModal() {
  //useEffect to make call to database for "records"
  //useState to save those values to be displayed
  const [revenue, SetRevenue] = useState({
    companyName: "null",
    quarter: "null",
    revenues: 0,
  });
  const [longestLifespan, setLongestLifespan] = useState({
    companyName: "null",
    days: 0,
  });
  const [cupsSold, setCupsSold] = useState(0);
  const [bestMonth, setBestMonth] = useState({
    companyName: "null",
    quarter: 0,
    earnings: 0,
  });
  const [bestDay, setBestDay] = useState({
    companyName: "null",
    cupsSold: 0,
    earnings: 0,
    temperature: "null",
  });
  return (
    <div>
      <h2>Highest Revenue in a month:</h2>
      <ul>
        <li>
          Company name: <span>{revenue.companyName}</span>
        </li>
        <li>
          Quarter: <span>{revenue.quarter}</span>
        </li>
        <li>
          Revenues: <span>{revenue.revenues}</span>
        </li>
      </ul>
      <h2>Overall: Longest Lifespan</h2>
      <ul>
        <li>
          Company Name: <span>{longestLifespan.companyName}</span>
        </li>
        <li>
          <span>{longestLifespan.days} </span>Days
        </li>
      </ul>
      <h2>Total Cups Sold</h2>
      <ul>
        <li>
          cups Sold:<span> {cupsSold}</span>
        </li>
      </ul>
      <h2>Highest Earnings in a month</h2>
      <ul>
        <li>
          Company name: <span>{bestMonth.companyName}</span>
        </li>
        <li>
          Quarter: <span>{bestMonth.quarter}</span>
        </li>
        <li>
          Earnings: <span> {bestMonth.earnings}</span>
        </li>
      </ul>
      <h2>Overall: Best Day</h2>
      <ul>
        <li>
          Company name: <span>{bestDay.companyName}</span>
        </li>
        <li>
          cups sold: <span>{bestDay.cupsSold}</span>
        </li>
        <li>
          Earnings: <span>{bestDay.earnings}</span>
        </li>
        <li>
          Temperature: <span>{bestDay.temperature}</span>
        </li>
      </ul>
    </div>
  );
}
