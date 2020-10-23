import * as React from 'react'
import { ContentProps } from './types'

export const About: React.FunctionComponent<ContentProps> = () => {

    return (
        <div style={{ padding: 20, textAlign: "left" }}>
            {"Hello my friends. This is me"}
        </div >
    )
}