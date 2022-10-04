import React, { useState, useEffect } from "react";
import "../styles/Error.css";
let messageArray = ["Getting Windows Ready", "Your system is running updates", "Please wait", "This is taking longer than usual", "Installing"]
function Error() {
  const [errorPercent, setErrorPercent] = useState(0);
  const [message, setMessage] = useState(messageArray[0])
  useEffect(() => {
    updateErrorPercent();
  }, []);
  const updateErrorPercent = () => {
    setInterval(() => {
      setErrorPercent(Math.floor(Math.random() * 100));
      setMessage(messageArray[Math.floor(Math.random() * 4)])
    }, 50000);
  };
  return (
    <div>
      <div class="loader">
        <div class="bg">{errorPercent} %</div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
      <p style={{ marginTop: "120px", color: "#fff", fontSize: "1.2rem", lineHeight: "2rem" }}>{message}<br /> Do not turn off your computer</p>
    </div>
  );
}

export default Error;
