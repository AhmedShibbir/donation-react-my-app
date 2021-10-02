import React from 'react';
import './Card.css'

const Card = (props) => {
    const {id,image,full_name,email,phone,age,gender,profession,country,total_property,donation_amount}= props.singleDonation;
    return (
        <div className='cards_container'>
          <div className="card-container">
            <div className="single-card">
                <img src={image} alt=""/>
                <h4><b>Name:</b> {full_name}</h4>
                <p><b>Email:</b> {email}</p>
                <p><b>Profession:</b> {profession}</p>
                <p>Gender:<b> {gender}</b></p>
                <p><b>Total Property:</b> {total_property}</p>
                <p><b>Donation Amount:</b> {donation_amount}</p>
                <button>Select</button>
            </div>
          </div>
          <div className="total-summary">

          </div>
        </div>
    );
};

export default Card;