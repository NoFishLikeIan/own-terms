import { About } from "./content/about"
import { Contact } from "./content/contact"
import { Fallback } from "./content/fallback"
import { ContentComponent } from "./content/types"

export const PAGES = ["About", "Random", "Research", "Contact"] as const
export type Pages = typeof PAGES


export const getContentComponent: ((currentPage: Pages[number]) => ContentComponent) = (currentPage) => {

    switch (currentPage) {
        case "About":
            return About

        case "Contact":
            return Contact

        default:
            return Fallback
    }

}
