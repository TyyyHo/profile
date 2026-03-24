import "./fading.css"
import "./fading_mobile.css"

interface FadingProps {
  text: string
}

const Fading = ({ text }: FadingProps) => {
  return (
    <div className="fading" style={{ pointerEvents: "auto" }}>
      <svg>
        <text dominantBaseline="middle" y="55%">
          {text}
        </text>
      </svg>
    </div>
  )
}

export default Fading
