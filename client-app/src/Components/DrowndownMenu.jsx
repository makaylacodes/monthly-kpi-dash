import React from "react";
import "../Styles/DropdownMenu.css";

const DropdownMenu = () => {
  return (
    <div className="dropdown">
      <label htmlFor="period-select" className="dropdown-label">
        Select period:
      </label>
      <select id="period-select" className="dropdown-select">
        <option value="2021 Q1">2021 Q1</option>
        <option value="2021 Q2">2021 Q2</option>
        <option value="2021 Q3">2021 Q3</option>
        <option value="2021 Q4">2021 Q4</option>
      </select>
    </div>
  );
};

export default DropdownMenu;
