import React, { useEffect, useRef, useState } from "react";
import anime from "animejs/lib/anime.es.js";
import "./spread.scss";

const Spread = () => {
  const [grid, setGrid] = useState({ columns: 0, rows: 0, total: 1 });
  const previousColor = useRef(0);
  const { total } = grid;

  function initGrid() {
    const columns = Math.floor(
      document.getElementById("spread").clientWidth / 50
    );
    const rows = Math.floor(
      document.getElementById("spread").clientHeight / 50
    );

    setGrid({
      columns: columns,
      rows: rows,
      total: columns * rows,
    });
  }

  function tiggerSpread(e) {
    const id = e.target.id;
    const { columns, rows } = grid;
    let color1 = "hsl(0, 0%, 100%)";
    let color2 = "hsl(0, 0%, 100%)";
    //顏色選項
    const option = [
      [9, 64],
      [39, 59],
      [60, 69],
      [120, 45],
      [200, 50],
      [180, 50],
      [300, 40],
    ];

    //取隨機不重複數字，不重複時紀錄在Ref
    let randomNum = Math.floor(Math.random() * option.length);
    while (randomNum === previousColor.current) {
      randomNum = Math.floor(Math.random() * option.length);
    }
    previousColor.current = randomNum;

    //更新顏色
    color1 = `hsl(${option[randomNum][0]}, 100%, ${option[randomNum][1]-10}%)`;
    color2 = `hsl(${option[randomNum][0]}, 100%, ${option[randomNum][1]}%)`;

    //動畫
    anime({
      targets: ".gridItem",
      backgroundColor: [
        { value: color1, easing: "easeOutSine", duration: 500 },
        { value: color2, easing: "easeInOutQuad", duration: 1000 },
      ],
      delay: anime.stagger(80, { grid: [columns, rows], from: id }),
    });
  }

  useEffect(() => {
    initGrid();
  }, []);

  return (
    <div id="spread">
      {[...Array(total)].map((item, index) => {
        return (
          <div
            id={index}
            className="gridItem"
            key={index}
            onClick={tiggerSpread}
          ></div>
        );
      })}
    </div>
  );
};

export default Spread;
