import * as React from 'react'

import { colors, style } from '../constant'

import { Dimensions } from "../state/useWindowDimensions"

interface RightPanelProps {
    dimensions?: Dimensions
}

export const RightPanel: React.FunctionComponent<RightPanelProps> = (props) => {

    const dimensions = { height: "100%", width: "100%", ...props.dimensions }

    return (
        <div
            style={{
                ...dimensions, ...style,
                backgroundColor: colors.lightBlue,
                borderLeft: 0
            }}
        >
            Hello!
        </div>
    )
}