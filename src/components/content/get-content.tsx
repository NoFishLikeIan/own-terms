import { About } from "./about"
import { Fallback } from "./fallback"
import { ContentComponent } from "./types"

export const PAGES = ["Random junk", "About", "CV", "Research"] as const
export type Pages = typeof PAGES


export const getContentComponent: ((currentPage: Pages[number]) => ContentComponent) = (currentPage) => {

    switch (currentPage) {
        case "About":
            return About

        default:
            return Fallback
    }

}