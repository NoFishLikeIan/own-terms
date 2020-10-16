import * as React from 'react'

import { Dimensions } from "../state/useWindowDimensions"

interface HeaderProps {
    dimensions: Dimensions
}

export const Header: React.FunctionComponent<HeaderProps> = (props) => {

    const { dimensions: { width, height } } = props

    return (
        <div style={{ height: height * 0.05, width, backgroundColor: "lightblue" }}>
            Hi I am an header
        </div>
    )
}

