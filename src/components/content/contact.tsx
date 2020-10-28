import * as React from 'react'
import { ContentProps } from './types'


const CONTACTS = ["a.titton@tinbergen.nl"]


const copyToClip = (text: string) => {
    const dummy = document.createElement("textarea")

    document.body.appendChild(dummy)

    dummy.value = text
    dummy.select()

    document.execCommand("copy")
    document.body.removeChild(dummy)
}

export const Link: React.FunctionComponent<{ contact: string }> = ({ contact }) => {

    const handleOnClick = () => {
        copyToClip(contact)
    }

    return (
        <div className="contact" style={{ padding: 10, width: 400 }} onClick={handleOnClick}>
            <div style={{ padding: 5 }}>
                {contact}
            </div>
            <button className="copy" style={{ marginLeft: 50, padding: 5 }}>
                Copy to clipboard
            </button>
        </div>
    )
}

export const Contact: React.FunctionComponent<ContentProps> = () => {

    return (
        <>
            <div style={{ height: "80%", textAlign: "left", padding: 20 }}>
                <h3>
                    Not sure why you would want to talk to me...
                </h3>
                <p>
                    ... but since you clicked,
                </p>
                <div style={{ height: "50%", margin: 20, padding: 20, display: "flex", flexDirection: "column", alignContent: "space-around" }}>
                    {
                        CONTACTS.map(c => <Link key={c} contact={c} />)
                    }
                </div>
            </div >

        </>
    )
}