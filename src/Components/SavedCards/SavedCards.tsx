import React, { FC } from 'react';
import './SavedCards.css';
import GreetingCard from '../GreetingCard/GreetingCard';



interface Props{
    savedCards: []
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
        <div> {allCards} </div>
    );
};

export default SavedCards;