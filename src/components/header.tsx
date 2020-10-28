import * as React from 'react'

import { Button } from './interaction/button'
import { ComponentProps } from './types'

import { CSSColor, style } from '../constant'

const B_COLORS: Array<CSSColor> = ["red", "orange", "green", "lightblue"]

export interface HeaderProps extends ComponentProps {
    pages: string[],
}

const HEADER_STYLE: React.CSSProperties = {
    borderBottom: 0,
    display: "flex",
    justifyContent: "space-evenly",
    flex: 1,
    flexDirection: "row"
}

export const Header: React.FunctionComponent<HeaderProps> = (props) => {

    const { dimensions, pages } = props

    return (
        <div style={{ ...dimensions, ...style, ...HEADER_STYLE }}>
            {pages.map((name, i) =>
                <Button name={name} color={B_COLORS[i]} key={name} />
            )}
        </div>
    )
}

