import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="Footer_main_container">
            <div className="Footer_container">
                <div className="Contacts">
                    <h3>Contacts</h3>
                    <p>Candella Web IT Limited.</p>
                    <p>323/4, Level#110, Liberal villa, New York-6003521, USA</p>
                </div>
                <div className="Footer_Links">
                    <a href="/Github">Github</a>
                    <a href="/LinkedIn">LinkedIn</a>
                    <a href="/Gmail">Gmail</a>
                </div>
            </div>
            <div className="footer-copyright">
                <small>©All rights are reserved, 2021. candella.it@web.com.</small>
            </div>
        </div>
    );
};

export default Footer;