import React, { useEffect, useRef, useState } from "react";
import anime from "animejs/lib/anime.es.js";
import "./spread.scss";
import "./spread_mobile.scss";

import ClickHint from "../../hint/click/clickHint";

const Spread = () => {
  const [showHint, setHint] = useState(true);
  const [grid, setGrid] = useState({ columns: 0, rows: 0, total: 1 });
  const previousColor = useRef(0);
  const { total } = grid;

  function initGrid() {
    const columns = Math.floor(
      document.getElementById("spread").clientWidth / 30
    );
    const rows = Math.floor(
      document.getElementById("spread").clientHeight / 30
    );

    setGrid({
      columns: columns,
      rows: rows,
      total: columns * rows,
    });
  }

  //觸發動畫
  function tiggerSpread(e) {
    const id = e.target.id;
    const { columns, rows } = grid;
    //顏色選項
    const option = [
      [10, 64],
      [30, 60],
      [55, 65],
      [120, 45],
      [210, 50],
      [170, 50],
      [300, 50],
    ];

    //取隨機不重複數字，不重複時紀錄在Ref
    let randomNum;
    while (randomNum === undefined || randomNum === previousColor.current) {
      randomNum = Math.floor(Math.random() * option.length);
    }
    previousColor.current = randomNum;

    //更新顏色
    let color1 = `hsl(${option[randomNum][0]}, 90%, ${
      option[randomNum][1] - 18
    }%)`;
    let color2 = `hsl(${option[randomNum][0]}, 90%, ${
      option[randomNum][1] - 15
    }%)`;
    let color3 = `hsl(${option[randomNum][0]}, 100%, ${option[randomNum][1]}%)`;

    //動畫
    anime({
      targets: ".gridItem",
      backgroundColor: [
        { value: color1, easing: "easeOutSine", duration: 80 },
        { value: color2, easing: "easeOutSine", duration: 100 },
        { value: color3, easing: "easeOutSine", duration: 100 },
      ],
      delay: anime.stagger(80, { grid: [columns, rows], from: id }),
    });

    //呼叫過fn後提示消失
    setHint(false);
  }

  //初始化網格
  useEffect(() => {
    initGrid();
  }, []);

  return (
    <div id="spread" onClick={tiggerSpread}>
      <ClickHint isShow={showHint} text={"Click"} />
      {[...Array(total)].map((item, index) => {
        return <div id={index} className="gridItem" key={index}></div>;
      })}
    </div>
  );
};

export default Spread;
