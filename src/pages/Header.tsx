import React from 'react';

import { Link } from 'react-router-dom';

import '../styles/pages/header.css';

function Header() {
    return(
        <header>
            <div className="logo">
                <h1>TM</h1>
            </div>
            <nav>
                <ul>
                    <li>
                    <Link to="/" className="button">Home</Link>                        
                    </li>
                    <li>
                    <Link to="/about" className="button">About</Link>    
                    </li>
                    <li>
                    <Link to="/portfolio" className="button">Portfolio</Link>    
                    </li>
                    <li>
                    <Link to="/contact" className="button">Contact</Link>    
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;