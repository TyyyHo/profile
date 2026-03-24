import "./scrollHint.css"

import { ReactComponent as ScrollImg } from "../../../assets/img/hint/tap.svg"

interface ScrollHintProps {
  isShow: boolean
  text: string
}

const ScrollHint = ({ isShow, text }: ScrollHintProps) => {
  return (
    <div id="scrollHint" className={isShow ? "" : "hideScroll"}>
      <div className="svgContainer">
        <ScrollImg />
      </div>
      <p>{text}</p>
    </div>
  )
}

export default ScrollHint
