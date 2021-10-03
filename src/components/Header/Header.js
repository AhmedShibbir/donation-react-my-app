import React from 'react';
import "./Header.css";
import Card from '../Cards/Card';

const Header = (props) => {
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
            <div className="Cards-info">
                <h5>Total Data found: {props.Donations.length}</h5>
                <h5>Buget of donation collection: $100000</h5>
            </div>
           <div className="cards">
                <div className="card_container">
                    {props.Donations.map(Donation => <Card singleDonation ={Donation} key = {Donation.id}></Card>)}
                </div>
                <div className="total-summary">
                    <h5>Total summary</h5>
                </div>
           </div>
        </div>
    );
};

export default Header;