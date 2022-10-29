import React from "react";
import Data from "./games.json";

const css = `
.gamesDiv {
    color: #1349d3;
    font-family: "Lexend Giga";
    font-size: 16px;
    text-align: center;
    border-radius: 25px;
}

.gameCard {
  height: 100px;
  width: 100px;
  background-color: #1349d3;
  margin: 10px;
  padding: 10px;
  display: inline-block;
  cursor: pointer;

}

.lunarButton {
  color: #1c1c1c;
  font-family: "Lexend Giga";
  font-size: 12px;
}
`;

function GameCards() {
  return (
    <div className="gamesDiv">
      <div className="gamesDiv1 grid grid-cols-4 gap-10 ml-24 mt-96 text-center mb-10">
        {Data.map((game) => {
          if (game.title.length === 14) {
            return (
              <>
                <style>{css}</style>
                <div key={game.id}>
                  <svg xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <rect
                        x="0"
                        y="0"
                        width="2000"
                        height="250"
                        strokeWidth={5}
                        strokeLinejoin="round"
                        fill="#1349d3"
                      ></rect>
                      <text
                        className="m-200"
                        x="20%"
                        y="30%"
                        fontFamily="Lexend Giga"
                        fontSize={18}
                        fill="1c1c1c"
                      >
                        {game.title}
                      </text>
                      <a href={game.location}>
                        <text
                          className="m-8"
                          x="40%"
                          y="55%"
                          fontFamily="Lexend Giga"
                          fontSize={12}
                          fill="1c1c1c"
                          href={game.location}
                        >
                          Launch
                        </text>
                      </a>
                    </g>
                  </svg>
                </div>
              </>
            );
          } else {
            return (
              <>
                <style>{css}</style>
                <div key={game.id}>
                  <svg xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <rect
                        x="0"
                        y="0"
                        width="2000"
                        height="250"
                        strokeWidth={5}
                        strokeLinejoin="round"
                        fill="#1349d3"
                      ></rect>
                      <text
                        className="m-200"
                        x="30%"
                        y="30%"
                        fontFamily="Lexend Giga"
                        fontSize={18}
                        fill="1c1c1c"
                      >
                        {game.title}
                      </text>
                      <a href="https://retro-bowl.com">
                      <text
                        className="lunarButton"
                        x="40%"
                        y="55%"
                        fontFamily="Lexend Giga"
                        fontSize={12}
                        fill="1c1c1c"
                        href={game.location}
                      >
                        Launch
                      </text>
                      </a>
                    </g>
                  </svg>
                </div>
              </>
            );
          }
        })}
      </div>
    </div>
  );
}

export default GameCards;
