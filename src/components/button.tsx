import * as React from 'react'
import { useState } from 'react'
import { CSSColor } from '../constant'

export interface ButtonProps {
    name: string,
    color: CSSColor
}

export const Button: React.FunctionComponent<ButtonProps> = (props) => {

    const { name, color } = props

    return (
        <div
            style={{ color: color }}
        >
            {name}
        </div>
    )
}