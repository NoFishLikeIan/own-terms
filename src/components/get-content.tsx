import { About } from "./content/about"
import { Fallback } from "./content/fallback"
import { ContentComponent } from "./content/types"

export const PAGES = ["About", "Random", "Research"] as const
export type Pages = typeof PAGES


export const getContentComponent: ((currentPage: Pages[number]) => ContentComponent) = (currentPage) => {

    switch (currentPage) {
        case "About":
            return About

        default:
            return Fallback
    }

}
