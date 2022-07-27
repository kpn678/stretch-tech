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
    console.log(currentCard)
    return (
        <section className="card-preview-page">
            <div className="card">
                <h2>To: {currentCard.to} </h2>
                <p>{currentCard.quote}</p>
                <p>{currentCard.message}</p>
                <h2>From: {currentCard.from} </h2>
            </div>
            <div className="button-holder">
                <button>New Card</button>
                <Link to="/saved-cards">
                    <button onClick={() => saveCard(currentCard)}>Save Card</button>
                </Link>
                <button>Home</button>
            </div>
        </section>
    );
};

export default CardPreview;