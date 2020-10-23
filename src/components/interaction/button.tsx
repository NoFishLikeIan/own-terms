import * as React from 'react'
import { useState } from 'react'

import { CSSColor } from '../../constant'
import { Pages } from '../content/get-content'
import { HeaderProps } from '../header'

export interface ButtonProps {
    name: Pages[number],
    color: CSSColor,
    setPage: HeaderProps["setPage"]
}

const BUTTON_STYLE = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer"
}

export const Button: React.FunctionComponent<ButtonProps> = (props) => {

    const [isHover, setHover] = useState(false)
    const { name, color, setPage } = props

    const alpha = isHover ? 0.5 : 1

    return (
        <div
            style={{ ...BUTTON_STYLE, color, opacity: alpha }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => setPage(name)}
        >
            {name}
        </div >
    )
}