import React, { FC } from 'react';
import './CardPreview.css';

interface Props {
    currentCard: {
        from: string;
        to: string;
        message: string;
        quote: string;
    };
    saveCard: (card: object) => void
}

const CardPreview: FC<Props> = ({currentCard, saveCard}) => {
    console.log(currentCard)
    return (
        <section className="card-preview-page">
            <div className="card">
                <h2>To: </h2>
                <p>"Quote here"</p>
                <p>Message Here</p>
                <h2>From: </h2>
            </div>
            <div className="button-holder">
                <button>New Card</button>
                <button>Save Card</button>
                <button>Home</button>
            </div>
        </section>
    );
};

export default CardPreview;