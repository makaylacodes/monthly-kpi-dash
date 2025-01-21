import React from "react";
import IconNav from "./IconNav"; // Left navigation bar
import Header from "./Header"; // Updated Header component
import Dashboard from "./Dashboard"; // Dashboard content
import "../Styles/App.css";

const App = () => {
  return (
    <div className="app-container">
      {/* Left Navigation */}
      <IconNav />

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <Header />

        {/* Dashboard */}
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
