import * as React from 'react'
import { ContentProps } from './types'



export const About: React.FunctionComponent<ContentProps> = () => {

    return (
        <div style={{ padding: 20, textAlign: "left" }}>
            <p>
                Hello!
            </p>
            <p>
                I am just a guy interested in math, biology, and economics.
            </p>
            <p>
                Programmed at <a target="_blank" href="https://github.com/accurat/">Accurat</a>.
                Ph.D. at <a target="_blank" href="https://www.tinbergen.nl/home">Tinbergen</a>.
            </p>
        </div >
    )
}