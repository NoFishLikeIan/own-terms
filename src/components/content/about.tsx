import * as React from 'react'
import { images } from '../../constant'
import { ContentProps } from './types'


const LOWER_BORDER = {
    borderBottom: 1, borderBottomStyle: "solid", borderBottomColor: "gray"
} as const

export const About: React.FunctionComponent<ContentProps> = () => {

    return (
        <>
            <div style={{ height: "80%" }}>
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
                    <p>
                        As everyone these days I have an account on <a target="_blank" href="https://twitter.com/AccuIan?ref_src=twsrc%5Etfw" >Twitter</a> and <a target="_blank" href="https://github.com/NoFishLikeIan">GitHub</a>.
            </p>
                </div >
            </div>
            { /*
            <div style={{ height: "40%", textAlign: "center", overflow: "hidden" }}>
                <img src={images.logo} height={"150%"} style={{ opacity: 0.7 }}></img>
            </div>*/
            }

        </>
    )
}