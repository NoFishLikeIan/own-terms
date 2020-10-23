import * as React from 'react'

import { CSSColor, style } from '../constant'

import { Pages } from './get-content'
import { Button } from './interaction/button'
import { ComponentProps } from './types'

const B_COLORS: Array<CSSColor> = ["red", "orange", "green", "lightblue"]

export interface HeaderProps extends ComponentProps {
    pages: Pages,
    setPage: React.Dispatch<React.SetStateAction<string>>
}

const HEADER_STYLE: React.CSSProperties = {
    borderBottom: 0,
    display: "flex",
    justifyContent: "space-evenly",
    flex: 1,
    flexDirection: "row"
}

export const Header: React.FunctionComponent<HeaderProps> = (props) => {

    const { dimensions, pages, setPage } = props

    return (
        <div style={{ ...dimensions, ...style, ...HEADER_STYLE }}>
            {pages.map((name, i) => <Button name={name} color={B_COLORS[i]} key={name} setPage={setPage} />)}
        </div>
    )
}

