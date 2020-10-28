import * as React from 'react'
import { useRef, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { Dimensions } from '../state/useWindowDimensions'
import { Boids } from './games/boids'
import { Pages } from './get-content'
import { ComponentProps } from './types'

import { colors } from '../constant'

interface LocationState {
    from: {
        pathname: string
    }
}


interface RightPanelProps extends ComponentProps { }

export const RightPanel: React.FunctionComponent<RightPanelProps> = (props) => {

    const [panelDimensions, setDimensions] = useState<Dimensions>()

    const location = useLocation<LocationState>()

    const panelRef = useRef<HTMLDivElement>(null)
    const dimensions = { height: "100%", width: "100%", ...props.dimensions }

    useEffect(() => {
        // TODO: Should update at window resizes
        if (panelRef.current) {

            const { offsetHeight: height, offsetWidth: width } = panelRef.current

            setDimensions({ height, width })
        }

    }, [panelRef])


    const Canvas = location.pathname == "/about" ? Boids : () => <div></div>

    return (
        <div
            style={{
                ...dimensions,
                backgroundColor: colors.lightBlue,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
            ref={panelRef}
        >
            <Canvas width={panelDimensions?.width} height={panelDimensions?.height} />
        </div>
    )
}