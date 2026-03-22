import "./loading.scss"

interface LoadingProps {
  finish: boolean
}

const Loading = ({ finish }: LoadingProps) => {
  return (
    <div className={`loading ${finish ? "invisible" : "visible"}`}>
      <p>Loading</p>
      <div className="loadingBar">
        <div className="basic"></div>
        <div className="progress"></div>
      </div>
    </div>
  )
}

export default Loading
