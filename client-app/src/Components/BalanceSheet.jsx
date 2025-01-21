import React from "react";
import "../Styles/BalanceSheet.css";


const BalanceItem = ({ label, value }) => {
    return (
      <div className="balance-item">
        <span>{label}</span>
        <span>{value}</span>
      </div>
    );
  };

const BalanceSheet = () => {
    return (
    <div className="balance-sheet">
        
        <h3 className="balance-title">Balance Sheet</h3>
        <hr className="balance-title-divider" />
        <BalanceItem label={"Fixed Assets"} value={"$3,262"} />
        <BalanceItem label={"Current Assets"} value={"$11,062"} />
        <BalanceItem label={"Other Assets"} value={"$962"} />
        
        <hr className="balance-divider" />
        
        <div className="balance-item balance-total">
            <span>Total Assets</span>
            <span>$19,482</span>
        </div>
        
        <hr className="balance-total-divider" />
        <hr className="balance-total-divider" />
     
        <BalanceItem label={"Current Liabilities"} value={"$5,042"} />
        <BalanceItem label={"Long-term Liabilities"} value={"$931"} />
        <BalanceItem label={"Equity"} value={"$8,259"} />
        
        <hr className="balance-divider" />
        <div className="balance-item balance-total">
            <span>Total Liabilities & Equity</span>
            <span>$14,232</span>
        </div>

        <hr className="balance-total-divider" />
        <hr className="balance-total-divider" />

    </div>
  );
};

export default BalanceSheet;
