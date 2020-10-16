import { useState, useEffect } from 'react'

export const getWindowDimensions = () => {
    const { innerHeight: height, innerWidth: width } = window
    return { width, height }
}

export function useWindowDimensions() {
    const [windowDim, setWindowDim] = useState(getWindowDimensions)


    useEffect(() => {
        const handleResize = () => setWindowDim(getWindowDimensions())

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    })

    return windowDim
}


export type Dimensions = ReturnType<typeof getWindowDimensions>;
