import React from 'react'

import "./newsletter.scss"


export default function newsletter() {
    return (
        <div id="newsletter-container">
            <div className="wrapper">
                <div id="newsletter-content">
                    <h2>Subscribe to our newsletter</h2>
                    <p>You will receive updates about your order, discount codes, and more! 
                    </p>
                    <div id="newsletter-form">
                        <div id="imput-group">
                            <input type="text" placeholder="your email" />
                            <button>sign up!</button>
                        </div>
                    </div>          
                </div>
            </div>
        </div>
    )
}
