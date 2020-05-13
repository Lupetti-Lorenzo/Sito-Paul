import React from 'react'
import { Link } from "react-router-dom"

import "./landingPage.scss"

//root page with image at the center and a button to go to products page
export default function LandingPage() {
    return (
        <main>
            <div id="logo">
                <Link to="/products">
                    <img src=" https://cdn.shopify.com/s/files/1/1426/7942/products/HOODIE-BALLOUT-WHITE_370x.png?v=1548190465" alt="not found" />
                </Link>
            </div>

            <Link to="/products">
                <button>
                        Shop Now
                </button>
            </Link>
            
        </main>
    )
}
