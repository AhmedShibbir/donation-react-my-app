import React, { useState } from 'react';
import "./Header.css";
import Card from '../Cards/Card';
import CardDetail from '../CardDetail/CardDetail';

const Header = (props) => {
    const [CardSummary, setCardSummary] = useState([]);
    const handleEventAddSummary = product => {
        const newCardSummary = [...CardSummary, product];
        setCardSummary(newCardSummary);
    };
    const [Total,setTotal]=useState([0]);
    let newTotal = 0;
    const countTotal = amount => {
        const dollerLess = amount.split("$");
        const newAmount = parseFloat(dollerLess[1]);
        newTotal+=newAmount;
        setTotal((newTotal/2).toFixed(2));
    }
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
                <h5>Buget of donation collection: $35000</h5>
            </div>
           <div className="cards">
                <div className="card_container">
                    {props.Donations.map(Donation => <Card singleDonation ={Donation} key = {Donation.id} handleEventAddSummary={handleEventAddSummary}></Card>)}
                </div>
                <div className="total-summary">
                <h5>Total Selected: {CardSummary.length}</h5>
                    {
                        CardSummary.map(selected => <CardDetail selected={selected} key = {selected.id} countTotal={countTotal}></CardDetail>)
                    }
                <h5>Total Collected: {Total}</h5>
                </div>
           </div>
        </div>
    );
};

export default Header;