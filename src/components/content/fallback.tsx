import * as React from 'react'
import { ContentProps } from './types'


export const Fallback: React.FunctionComponent<ContentProps> = () => {

    return (
        <div>
            {"I am a fallback"}
        </div >
    )
}