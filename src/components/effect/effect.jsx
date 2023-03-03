import React from 'react'
import "./effect.scss"

import BirdsEye from "./birdsEye/birdsEye"
import Spread from "./spread/spread"

const Effect = () => {
  return (
    <div id='effectContainer'>
        <Spread/>
        <BirdsEye/>
    </div>
  )
}

export default Effect