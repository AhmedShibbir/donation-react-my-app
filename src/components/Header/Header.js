import React from 'react';
import "./Header.css"

const Header = () => {
    return (
        <div className="Header-container">
            <div>
                <h1 className="Header-greeting">Donate for a better world!</h1>
            </div>
            <nav>
                <a href="/Home">Home</a>
                <a href="/News">News</a>
                <a href="/About">About</a>
                <a href="/Contact">Contact</a>
            </nav>
        </div>
    );
};

export default Header;