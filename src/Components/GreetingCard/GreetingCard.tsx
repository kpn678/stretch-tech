import React, { FC } from 'react';
import Card from '../../types/Card.type';
import './GreetingCard.css';

interface Props{
    to: string;
    quote: string;
    message: string;
    from: string
}

const GreetingCard: FC<Card> = ({to, quote, message, from }) => {
    return (
        <section className="mini-card">
            <p>To: {to}</p>
            <p>{quote}</p>
            <p>{message}</p>
            <p>From: {from}</p>
        </section>
    );
};

export default GreetingCard;