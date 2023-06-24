"use client";
import React, { useState, useEffect } from "react";

export default function statsModal() {
  //need to make use states for data.
  return (
    <div>
      <h2>Your Stats</h2>
      <div>
        <table>
          <tr>
            <th>Day</th>
            <th>Last</th>
            <th>Best</th>
          </tr>
          <tr>
            <th>Revenue</th>
            <th>
              <span></span>
            </th>
            <th>
              <span></span>
            </th>
          </tr>
          <tr>
            <th>Stock Used</th>
            <th>
              <span></span>
            </th>
            <th>
              <span></span>
            </th>
          </tr>
          <tr>
            <th>Stock Lost</th>
            <th>
              <span></span>
            </th>
            <th>
              <span></span>
            </th>
          </tr>
          <tr>
            <th>Gross Profit</th>
            <th>
              <span></span>
            </th>
            <th>
              <span></span>
            </th>
          </tr>
          <tr>
            <th>Gross margin</th>
            <th>
              <span></span>
            </th>
            <th>
              <span></span>
            </th>
          </tr>
          <tr>
            <th>Rents</th>
            <th>
              <span></span>
            </th>
            <th>
              <span></span>
            </th>
          </tr>
          <tr>
            <th>Marketing</th>
            <th>
              <span></span>
            </th>
            <th>
              <span></span>
            </th>
          </tr>
          <tr>
            <th>Total Expense</th>
            <th>
              <span></span>
            </th>
            <th>
              <span></span>
            </th>
          </tr>
          <tr>
            <th>Earnings</th>
            <th>
              <span></span>
            </th>
            <th>
              <span></span>
            </th>
          </tr>
        </table>
      </div>
    </div>
  );
}
