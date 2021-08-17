import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="containerFluid">
            <div className="navbarNav">
                <h4 className="logo">The<span>Cocktail</span>DB</h4>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
                
            </div>
        </div>
    )
}

export default Navbar
