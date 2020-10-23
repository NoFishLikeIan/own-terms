import * as React from 'react'

import { colors, style } from '../constant'

import { Dimensions } from "../state/useWindowDimensions"
import { ComponentProps } from './types'

interface RightPanelProps extends ComponentProps { }

export const RightPanel: React.FunctionComponent<RightPanelProps> = (props) => {

    const dimensions = { height: "100%", width: "100%", ...props.dimensions }

    return (
        <div
            style={{
                ...dimensions,
                backgroundColor: colors.lightBlue,
            }}
        >
            Hello!
        </div>
    )
}