import { CSSProperties } from 'react'

export interface ComponentProps {
    dimensions?: {
        height?: CSSProperties["height"],
        width?: CSSProperties["width"]
    }
}