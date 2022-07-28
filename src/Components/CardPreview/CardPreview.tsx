import React, { FC } from 'react';
import './CardPreview.css';
import Card from "../../types/Card.type"
import { Link } from "react-router-dom"

interface Props {
    currentCard: {
        from: string;
        to: string;
        message: string;
        quote: string;
    };

    saveCard: (card: Card) => void
}

const CardPreview: FC<Props> = ({currentCard, saveCard}) => {
    return (
        <section className="card-preview-page">
            <div className="card">
                <h2 className='to-field'>To: {currentCard.to} </h2>
                <p className='quote-field'>{currentCard.quote}</p>
                <p className='message-field'>{currentCard.message}</p>
                <h2 className='from-field'>From: {currentCard.from} </h2>
            </div>
            <div className="button-holder">
                <Link to="/create-card">
                    <button className='new-card-button'>New Card</button>
                </Link>
                <Link to="/saved-cards">
                    <button className='save-card-button' onClick={() => saveCard(currentCard)}>Save Card</button>
                </Link>
            </div>
        </section>
    );
};

export default CardPreview;