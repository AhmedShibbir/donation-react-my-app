import React from 'react';
import "./Header.css"

const Header = () => {
    return (
        <div className="Header_Main_Container">
            <div className="Header-container">
                <div>
                    <h4 className="Header-greeting">In Search of a better world!</h4>
                </div>
                <nav>
                    <a href="/Home">Home</a>
                    <a href="/News">News</a>
                    <a href="/About">About</a>
                    <a href="/Contact">Contact</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;