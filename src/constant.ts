import { CSSProperties } from 'react'

export type CSSColor = CSSProperties["color"]


export const colors = {
    lightYellow: "rgb(255, 245, 209)",
    lightBlue: "rgb(240 248 255)"
} as const


export const style = {
    backgroundColor: colors.lightYellow,
    borderWidth: 2,
    borderStyle: "solid"
} as const