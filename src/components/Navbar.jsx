import React from "react";

const css = `
.lunarNavbarText1 {
    color: #1349d3;
    font-family: "Lexend Giga";
    font-size: 14px;
    position: fixed;
    top: 3%;
    left: 3%;
    transform: translate(-50%, -50%);
}

.lunarNavbarText5 {
    color: #1349d3;
    font-family: "Lexend Giga";
    font-size: 14px;
    position: fixed;
    top: 3%;
    left: 84%;
    transform: translate(-50%, -50%);
}

.lunarNavbarText2 {
    color: #1349d3;
    font-family: "Lexend Giga";
    font-size: 14px;
    position: fixed;
    top: 3%;
    left: 89%;
    transform: translate(-50%, -50%);
}

.lunarNavbarText3 {
    color: #1349d3;
    font-family: "Lexend Giga";
    font-size: 14px;
    position: fixed;
    top: 3%;
    left: 94%;
    transform: translate(-50%, -50%);
}

.lunarNavbarText4 {
    color: #1349d3;
    font-family: "Lexend Giga";
    font-size: 14px;
    position: fixed;
    top: 3%;
    left: 98%;
    transform: translate(-50%, -50%);
}

`;

function Navbar() {
  return (
    <>
      <style>{css}</style>
      <a className="lunarNavbarText1" href="/">
        Lunar
      </a>
      <a className="lunarNavbarText5" href="/search">
        Search
      </a>
      <a className="lunarNavbarText2" href="/store">
        App Store
      </a>
      <a className="lunarNavbarText3" href="/game">
        Games
      </a>
      <a className="lunarNavbarText4" href="/app">
        Apps
      </a>
    </>
  );
}

export default Navbar;
