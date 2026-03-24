import "./effect.css"
import "./effect_mobile.css"

import BirdsEye from "./birdsEye/birdsEye"
import Spread from "./spread/spread"
import Title from "../title/bouncy/title"

interface EffectProps {
  isMobile: boolean
}

const Effect = ({ isMobile }: EffectProps) => {
  return (
    <div id="effect" className="section">
      <Title title={"Try something COOL!"} />

      <section id="effectContainer">
        <BirdsEye isMobile={isMobile} />
        <Spread />
      </section>
    </div>
  )
}

export default Effect
