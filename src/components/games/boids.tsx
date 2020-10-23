import * as React from "react"
import { useRef, useState, useEffect } from 'react'

import { Flock, Boid, heading } from 'boids-ts'
import { Dimensions } from "../../state/useWindowDimensions"


interface BoidsProps extends Dimensions { }

const R = 4
const BOIDS = 50


export const Boids: React.FunctionComponent<BoidsProps> = (props) => {

    const canvasRef = useRef<HTMLCanvasElement>(null)

    const [flock, setFlock] = useState<Flock>()
    const [dimensions, setDimensions] = useState<Dimensions>()

    // Create initial flocks
    useEffect(() => {
        const { width, height } = props
        setDimensions({ width, height })

        if (width && height) {
            const newFlock = new Flock()
            for (let i = 0; i < BOIDS; i++) {
                const opts = {
                    center: [width * Math.random(), height * Math.random()],
                    canvasSize: [width, height],

                    velocity: [Math.random(), Math.random()],
                    r: R,
                    maxspeed: 3,
                    maxforce: 0.09,

                    separationScale: 1.5,
                    alignScale: 1.0,
                    cohesionScale: 1.0,

                    desiredSeparation: 25,
                    neighborDistance: 50,
                }

                let b = new Boid(opts)
                newFlock.addBoid(b)
            }
            setFlock(newFlock)
        }
    }, [props])


    // Animate flock
    useEffect(() => {
        const context = canvasRef.current?.getContext("2d")

        let requestId: number


        const render = () => {
            // FIXME: Ugly
            if (context && flock && dimensions?.width && dimensions?.height) {
                flock.run()

                context.clearRect(0, 0, dimensions.width, dimensions.height)
                const R = 2

                for (let i = 0; i < flock.boids.length; ++i) {
                    const boid = flock.boids[i]
                    const x = boid.position[0]
                    const y = boid.position[1]
                    const theta = heading(boid.velocity) + Math.PI / 2

                    context.save()
                    context.translate(x, y)
                    context.rotate(theta)
                    context.beginPath()
                    context.moveTo(0, -R * 2)
                    context.lineTo(-R, R * 2)
                    context.lineTo(R, R * 2)
                    context.closePath()
                    context.stroke()
                    context.restore()
                }

            }

            requestId = requestAnimationFrame(render)
        }

        render()

        return () => cancelAnimationFrame(requestId)
    }, [dimensions])

    return <canvas ref={canvasRef} height={props.height} width={props.width} />
}

