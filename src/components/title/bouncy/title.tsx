import { useState } from "react"
import "./title.css"
import "./title_mobile.css"

interface TitleProps {
  title: string
}

type AnimationState = {
  animationName: "bouncy"
  key: number
} | null

const Title = ({ title }: TitleProps) => {
  const [animation, setAnimation] = useState<AnimationState>(null)
  const myTitle = title.split("")

  return (
    <div id="titleContainer">
      <h2 className="title">
        {myTitle.map((item, index) => {
          return (
            <span
              key={index}
              className={
                animation?.key === index ? animation.animationName : ""
              }
              onMouseEnter={() =>
                setAnimation({ animationName: "bouncy", key: index })
              }
              onClick={() =>
                setAnimation({ animationName: "bouncy", key: index })
              }
              onAnimationEnd={() => setAnimation(null)}
            >
              {item !== " " ? item : <span>&nbsp;</span>}
            </span>
          )
        })}
      </h2>
    </div>
  )
}

export default Title
