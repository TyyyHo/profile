import "./toTop.css"
import "./toTop_mobile.css"

import arrow from "/src/assets/img/toTop/up_ward.png"

interface ToTopProps {
  onTop: boolean
}

const ToTop = ({ onTop }: ToTopProps) => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return !onTop ? (
    <div id="toTop" onClick={goToTop}>
      <img src={arrow} alt="Back to top" />
    </div>
  ) : null
}

export default ToTop
