import * as React from "react"
import { Route, Switch } from "react-router-dom"

import { About } from "./content/about"
import { Contact } from "./content/contact"
import { Fallback } from "./content/fallback"
import { ContentProps, ContentComponent } from "./content/types"

export const pages = {
    "about": About,
    "random": Fallback,
    "research": Fallback,
    "contact": Contact
} as const

export type Page = keyof typeof pages

type PageEntries = [Page, ContentComponent]


export const LeftContent: React.FunctionComponent<ContentProps> = (props) => {

    return (
        <Switch>
            {Object.entries(pages).map(
                ([pageName, Component]: PageEntries) => {

                    const path = `/${pageName}`

                    return (
                        <Route path={path} key={pageName}>
                            <Component {...props} />
                        </Route>
                    )
                }
            )}
        </Switch>
    )
}