import React from "react";
import './App.css'
import { useState } from "react";
import './Convert.css'

function Convert() {
    const [decimal, setDecimal] = useState("");
    const [binary, setBinary] = useState("");

    const convertToBinary = () => {
      const decimalNum = parseInt(decimal);
      const binaryNum = decimalNum.toString(2);
      setBinary(binaryNum);
    };

    return (
      <div>
        <h1 className="header">Decimal to Binary Converter</h1>
        <label htmlFor="decimal">Enter a decimal number:</label>
        <input
          type="number"
          id="decimal"
          value={decimal}
          onChange={(e) => setDecimal(e.target.value)}
        />
        <button onClick={convertToBinary}>Convert</button>
        <p>Binary number: {binary}</p>
      </div>
    );
}

export default Convert;