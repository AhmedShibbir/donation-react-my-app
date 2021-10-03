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
                    <a href="https://github.com/AhmedShibbir">Github</a>
                    <a href="https://www.linkedin.com/in/ahmedshibbir/">LinkedIn</a>
                    <a href="https://www.instagram.com/ahmed_shibbir/">Instagram</a>
                </div>
            </div>
            <div className="footer-copyright">
                <small>©All rights are reserved, 2021. candella.it@web.com.</small>
            </div>
        </div>
    );
};

export default Footer;