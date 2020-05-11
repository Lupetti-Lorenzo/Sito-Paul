import React from 'react'
import "./menu.scss"

export default function Menu({ active }) {
    return (
        <div id="sidenav" className={ active ? "open" : ""}>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
    )
}
