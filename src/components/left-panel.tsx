import * as React from 'react'
import { style } from '../constant'

import { Dimensions } from "../state/useWindowDimensions"

interface LeftPanel {
  dimensions: Dimensions
}

export const LeftPanel: React.FunctionComponent<LeftPanel> = (props) => {

  return (
    <div style={{ ...props.dimensions, ...style }}>
      Hello!
    </div>
  )
}