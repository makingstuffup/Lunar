import React from "react";

const css = `
.lunarFooterText1 {
    color: #1349d3;
    font-family: "Lexend Giga";
    font-size: 14px;
    position: fixed;
    top: 97%;
    left: 5%;
    transform: translate(-50%, -50%);
}

.lunarFooterText2 {
    color: #1349d3;
    font-family: "Lexend Giga";
    font-size: 14px;
    position: fixed;
    top: 97%;
    left: 89%;
    transform: translate(-50%, -50%);
}

.lunarFooterText3 {
    color: #1349d3;
    font-family: "Lexend Giga";
    font-size: 14px;
    position: fixed;
    top: 97%;
    left: 94%;
    transform: translate(-50%, -50%);
}

.lunarFooterText4 {
    color: #1349d3;
    font-family: "Lexend Giga";
    font-size: 14px;
    position: fixed;
    top: 97%;
    left: 98%;
    transform: translate(-50%, -50%);
}

`;

function Footer() {
  return (
    <>
      <style>{css}</style>
      <h1 className="lunarFooterText1">© Astral 2022</h1>
      <h1 className="lunarFooterText2">Credit</h1>
      <h1 className="lunarFooterText3">Privacy</h1>
      <h1 className="lunarFooterText4">TOS</h1>
    </>
  );
}

export default Footer;
