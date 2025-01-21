import React from "react";
import "../Styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="logo">🌐</div>
        <h1 className="title">Quarterly KPI Dashboard</h1>
      </div>
      <div className="header-bottom">
        <div className="search-dropdown">
          <label htmlFor="period-select" className="dropdown-label">
            Select period:
          </label>
          <div className="search-icon">🔍       </div>
          <select id="period-select" className="dropdown-select">
            <option value="2022 q1">2022 Q1</option>
            <option value="2022 q2">2022 Q2</option>
            <option value="2022 q3">2022 Q3</option>
            <option value="2022 q4">2022 Q4</option>
            <option value="2023 q1">2023 Q1</option>
            <option value="2023 q2">2023 Q2</option>
            <option value="2023 q3">2023 Q3</option>
            <option value="2023 q4">2023 Q4</option>
            <option value="2024 q1">2024 Q1</option>
            <option value="2024 q2">2024 Q2</option>
            <option value="2024 q3">2024 Q3</option>
            <option value="2024 q4">2024 Q4</option>
          </select>
          
        </div>
      </div>
    </header>
  );
};

export default Header;
