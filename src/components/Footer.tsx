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
      <a className="lunarFooterText1">© Astral 2022</a>
      <a className="lunarFooterText2" href="/credit">
        Credit
      </a>
      <a className="lunarFooterText3" href="/privacy">
        Privacy
      </a>
      <a className="lunarFooterText4" href="/tos">
        TOS
      </a>
    </>
  );
}

export default Footer;
