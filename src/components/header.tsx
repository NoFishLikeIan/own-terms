import * as React from 'react'
import { style } from '../constant'

import { Dimensions } from "../state/useWindowDimensions"

interface HeaderProps {
    dimensions: Dimensions
}

export const Header: React.FunctionComponent<HeaderProps> = (props) => {

    const { dimensions } = props

    return (
        <div style={{ ...dimensions, ...style }}>
            Header.
        </div>
    )
}

