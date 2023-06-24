"use client";
import React, { useState, useEffect } from "react";

export default function StatsModal() {
  //need to make use states for data.
  //have zustand make a call to the database to update zustand data
  //give this page most up to date data to be rendered
  return (
    <div>
      <h2>Your Stats</h2>
      <div>
        <table>
          <thead>
            <tbody>Day</tbody>
            <tbody>Last</tbody>
            <tbody>Best</tbody>
          </thead>
          <thead>
            <thead>Revenue</thead>
            <tbody>
              <span></span>
            </tbody>
            <thead>
              <span></span>
            </thead>
          </thead>
          <thead>
            <tbody>Stock Used</tbody>
            <tbody>
              <span></span>
            </tbody>
            <tbody>
              <span></span>
            </tbody>
          </thead>
          <thead>
            <tbody>Stock Lost</tbody>
            <tbody>
              <span></span>
            </tbody>
            <tbody>
              <span></span>
            </tbody>
          </thead>
          <thead>
            <tbody>Gross Profit</tbody>
            <tbody>
              <span></span>
            </tbody>
            <tbody>
              <span></span>
            </tbody>
          </thead>
          <thead>
            <tbody>Gross margin</tbody>
            <tbody>
              <span></span>
            </tbody>
            <tbody>
              <span></span>
            </tbody>
          </thead>
          <thead>
            <tbody>Rents</tbody>
            <tbody>
              <span></span>
            </tbody>
            <tbody>
              <span></span>
            </tbody>
          </thead>
          <thead>
            <tbody>Marketing</tbody>
            <tbody>
              <span></span>
            </tbody>
            <tbody>
              <span></span>
            </tbody>
          </thead>
          <thead>
            <tbody>Total Expense</tbody>
            <tbody>
              <span></span>
            </tbody>
            <tbody>
              <span></span>
            </tbody>
          </thead>
          <thead>
            <tbody>Earnings</tbody>
            <tbody>
              <span></span>
            </tbody>
            <tbody>
              <span></span>
            </tbody>
          </thead>
        </table>
      </div>
    </div>
  );
}
