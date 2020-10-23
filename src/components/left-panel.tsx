import * as React from 'react'
import { style } from '../constant'

import { Dimensions } from "../state/useWindowDimensions"
import { ComponentProps } from './types'

interface LeftPanel extends ComponentProps { }

export const LeftPanel: React.FunctionComponent<LeftPanel> = (props) => {

  return (
    <div style={{ ...props.dimensions, ...style }}>
      Hello!
    </div>
  )
}