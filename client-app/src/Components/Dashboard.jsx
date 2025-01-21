// Dashboard.jsx
import React , {useState, useEffect } from "react"
import "../Styles/Dashboard.css"
import BalanceSheet from "./BalanceSheet.jsx"

const FirstRowChart = ({title, caption}) => {
    return (
        <div className="card">
          <h3>{title}</h3>
          <p>{caption}</p>
        </div>
    )
}
const FirstRow = () => {
    return (
        <div className="row">
            <FirstRowChart title={"Revenue"} caption={"$250,910.87"} />
            <FirstRowChart title={"Gross Profit"} caption={"-$99,910.13"} />
            <FirstRowChart title={"Net Profit"} caption={"-$69,910.13"} />
        </div>
    )
}

const SecondRow = () => {
    return (
        <div className="row">
            <FirstRowChart title={"Revenue"} caption={"$250,910.87"} />
            <FirstRowChart title={"Gross Profit"} caption={"-$99,910.13"} />
            <FirstRowChart title={"Net Profit"} caption={"-$69,910.13"} />
        </div>
    )
}

const ThirdRow = () => {
    return (
        <div className="row">
            <FirstRowChart title={"Revenue"} caption={"$250,910.87"} />
            <FirstRowChart title={"Gross Profit"} caption={"-$99,910.13"} />
            <FirstRowChart title={"Net Profit"} caption={"-$69,910.13"} />
        </div>
    )
}


const Dash1stCol = () => {
    
    return (
      <div className="column first-column">
        {/* First Column */}
        <FirstRow />
        <SecondRow />
        <ThirdRow />
      </div>
    )
}

const Dash2ndCol = () => {
    return (
        <div className="column second-column">
            {/* Second Column */}
            <BalanceSheet />
        </div>
    )
}

const Dashboard = () => {
    return (
        <div className="dashboard">
        
            <Dash1stCol />
            <Dash2ndCol />
        
        </div>
    )
};

export default Dashboard;
