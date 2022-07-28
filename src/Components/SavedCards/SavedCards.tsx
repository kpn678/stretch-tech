import React, { FC } from 'react';
import './SavedCards.css';
import GreetingCard from '../GreetingCard/GreetingCard';
import Card from "../../types/Card.type"


interface Props{
    savedCards: Card[]
}

const SavedCards: FC<Props> = ({savedCards}) => {
    const allCards= savedCards.map((card) => {
        return <GreetingCard
            key={card.id} 
            to={card.to}
            quote={card.quote}
            message={card.message}
            from={card.from}
        />
    })
    return (
        <div className='cards-grid'> {allCards} </div>
    );
};

export default SavedCards;