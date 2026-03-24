import "./clickHint.css"

import { ReactComponent as ClickImg } from "../../../assets/img/hint/tap.svg"

interface ClickHintProps {
  isShow: boolean
  text: string
}

const ClickHint = ({ isShow, text }: ClickHintProps) => {
  return (
    <div id="clickHint" className={!isShow ? "hideClick" : ""}>
      <div className="svgContainer">
        <ClickImg />
      </div>
      <p>{text}</p>
    </div>
  )
}

export default ClickHint
