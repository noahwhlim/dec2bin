import React from "react";
import './App.css'
import { useState } from "react";
import './Dec2bin.css'

function Dec2bin() {
    const [decimal, setDecimal] = useState("");
    const [binary, setBinary] = useState("");

    const convertToBinary = () => {
      const decimalNum = parseInt(decimal);
      const binaryNum = decimalNum.toString(2);
      setBinary(binaryNum);
    };

    return (
      <div>
        {/* <h1 className="header">Decimal to Binary Converter</h1> */}
        <div className="input">
            <label className="input--label" htmlFor="decimal">Enter a decimal number: </label>
            <input className="input--dec"
            type="number"
            id="decimal"
            value={decimal}
            onChange={(e) => setDecimal(e.target.value)}
            />
        </div>
        <div id="convert">
            <button onClick={convertToBinary}>Convert</button>
        </div>
        <p className="output">Binary number: {binary}</p>
      </div>
    );
}

export default Dec2bin;