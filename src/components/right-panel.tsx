import { padEnd } from 'lodash'
import * as React from 'react'
import { useRef, useEffect, useState } from 'react'

import { colors } from '../constant'

import { Dimensions } from "../state/useWindowDimensions"
import { Boids } from './games/boids'
import { ComponentProps } from './types'


interface RightPanelProps extends ComponentProps { }

export const RightPanel: React.FunctionComponent<RightPanelProps> = (props) => {

    const [panelDimensions, setDimensions] = useState<Dimensions>()

    const panelRef = useRef<HTMLDivElement>(null)
    const dimensions = { height: "100%", width: "100%", ...props.dimensions }

    useEffect(() => {
        // TODO: Should update at window resizes
        if (panelRef.current) {
            const height = panelRef.current.offsetHeight
            const width = panelRef.current.offsetWidth

            setDimensions({ height, width })
        }

    }, [panelRef])

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
            <Boids width={panelDimensions?.width} height={panelDimensions?.height} />
        </div>
    )
}