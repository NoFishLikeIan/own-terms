import * as React from 'react'

import { CSSColor, style } from '../constant'

import { Dimensions } from "../state/useWindowDimensions"
import { Button } from './button'

const BUTTONS = ["Random junk", "About", "CV", "Research", "Sexual preferences"]
const B_COLORS: Array<CSSColor> = ["red", "black", "green", "blue", "aquamarine"]

interface HeaderProps {
    dimensions: Dimensions
}

const HEADER_STYLE: React.CSSProperties = {
    borderBottom: 0,
    display: "flex",
    justifyContent: "space-evenly",
    flex: 1,
    flexDirection: "row"
}

export const Header: React.FunctionComponent<HeaderProps> = (props) => {

    const { dimensions } = props

    return (
        <div style={{ ...dimensions, ...style, ...HEADER_STYLE }}>
            {BUTTONS.map((name, i) => <Button name={name} color={B_COLORS[i]} key={name} />)}
        </div>
    )
}

