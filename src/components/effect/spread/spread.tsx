import { useEffect, useRef, useState } from "react"
import anime from "animejs"
import "./spread.scss"
import "./spread_mobile.scss"

import ClickHint from "../../hint/click/clickHint"

interface GridState {
  columns: number
  rows: number
  total: number
}

const Spread = () => {
  const [showHint, setHint] = useState(true)
  const [grid, setGrid] = useState<GridState>({ columns: 0, rows: 0, total: 1 })
  const previousColor = useRef<number>(0)
  const { total } = grid

  function initGrid() {
    const spreadEl = document.getElementById("spread")
    if (!spreadEl) {
      return
    }

    const columns = Math.floor(spreadEl.clientWidth / 30)
    const rows = Math.floor(spreadEl.clientHeight / 30)

    setGrid({
      columns,
      rows,
      total: columns * rows,
    })
  }

  //觸發動畫
  function triggerSpread(e: React.MouseEvent<HTMLDivElement>) {
    const parsedId = Number((e.target as HTMLElement).id)
    const id = Number.isNaN(parsedId) ? 0 : parsedId
    const { columns, rows } = grid
    //顏色選項
    const option: Array<[number, number]> = [
      [10, 64],
      [30, 60],
      [55, 65],
      [120, 45],
      [210, 50],
      [170, 50],
      [300, 50],
    ]

    //取隨機不重複數字，不重複時紀錄在Ref
    let randomNum: number | undefined
    while (randomNum === undefined || randomNum === previousColor.current) {
      randomNum = Math.floor(Math.random() * option.length)
    }
    previousColor.current = randomNum
    const selectedColor = option[randomNum]
    if (!selectedColor) {
      return
    }

    //更新顏色
    const color1 = `hsl(${selectedColor[0]}, 90%, ${selectedColor[1] - 18}%)`
    const color2 = `hsl(${selectedColor[0]}, 90%, ${selectedColor[1] - 15}%)`
    const color3 = `hsl(${selectedColor[0]}, 100%, ${selectedColor[1]}%)`

    //動畫
    anime({
      targets: ".gridItem",
      backgroundColor: [
        { value: color1, easing: "easeOutSine", duration: 80 },
        { value: color2, easing: "easeOutSine", duration: 100 },
        { value: color3, easing: "easeOutSine", duration: 100 },
      ],
      delay: anime.stagger(80, { grid: [columns, rows], from: id }),
    })

    //呼叫過fn後提示消失
    setHint(false)
  }

  //初始化網格
  useEffect(() => {
    initGrid()
  }, [])

  return (
    <div id="spread" onClick={triggerSpread}>
      <ClickHint isShow={showHint} text={"Click"} />
      {[...Array(total)].map((_, index) => {
        return <div id={String(index)} className="gridItem" key={index}></div>
      })}
    </div>
  )
}

export default Spread
