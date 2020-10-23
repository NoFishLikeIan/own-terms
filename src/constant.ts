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


export const images = {
    logo: "https://avatars3.githubusercontent.com/u/31987205?s=460&u=cd1cedb981141c9077c85e2889b31d4b0f06ae00&v=4",
    chaos: "https://pbs.twimg.com/profile_banners/1032727905632219136/1589652322/600x200"
} as const