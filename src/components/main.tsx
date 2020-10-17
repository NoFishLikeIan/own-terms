import * as React from 'react'
import { style } from '../constant'

import { Dimensions } from "../state/useWindowDimensions"

interface MainProps {
  dimensions: Dimensions
}

export const Main: React.FunctionComponent<MainProps> = (props) => {

  return (
    <div style={{ ...props.dimensions, ...style }}>
      Hello!
    </div>
  )
}