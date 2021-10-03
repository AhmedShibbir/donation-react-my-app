import React from 'react';
import './Card.css'

const Card = (props) => {
    const {image,full_name,email,profession,total_property,donation_amount} = props.singleDonation;
    return (
      <div className="single-card">
      <img src={image} alt=""/>
      <ul>
        <li><b>Name:</b> {full_name}</li>
        <li><b>Email:</b> {email}</li>
        <li><b>Profession:</b> {profession}</li>
        <li><b>Total Property:</b> {total_property}</li>
        <li><b>Donation Amount:</b> {donation_amount}</li>
        <li><button onClick ={()=> props.handleEventAddSummary(props.singleDonation)}>Select</button></li>
      </ul>
  </div>
    );
};

export default Card;