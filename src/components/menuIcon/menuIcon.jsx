import React from 'react'
import "./menuIcon.scss"

export default function MenuIcon({active, onMenuClick}) {

    return(
        <div onClick={() => {if(!active) onMenuClick()}} id="menuContainer">
            <div id="menuIcon"  className={active ? "open" : "" }>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}
