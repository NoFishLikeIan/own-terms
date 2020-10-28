import * as React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { capitalize } from 'lodash'

import { CSSColor } from '../../constant'
import { Pages } from '../get-content'

export interface ButtonProps {
    name: Pages[number],
    color: CSSColor,
}

const BUTTON_STYLE = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer"
}

export const Button: React.FunctionComponent<ButtonProps> = (props) => {

    const [isHover, setHover] = useState(false)
    const { name, color } = props

    const alpha = isHover ? 0.5 : 1


    return (
        <Link
            to={`/${name}`}
            style={{ ...BUTTON_STYLE, color, opacity: alpha }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {capitalize(name)}
        </Link >
    )
}