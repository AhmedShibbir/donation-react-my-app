import React from 'react';
import "./CardDetail.css"

const CardDetail = (props) => {
    const {full_name,image,donation_amount} = props.selected;
       
    return (
        <div className="shortCard">
            <img src={image} alt="" />
            <div>
                <p> {full_name} </p>
                <p>Donated: {donation_amount}</p>
            </div>
            {props.countTotal(donation_amount)}
        </div>
    );
};

export default CardDetail;