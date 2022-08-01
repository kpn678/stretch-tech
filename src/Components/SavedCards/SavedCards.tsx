import React, { FC } from "react";
import "./SavedCards.css";
import GreetingCard from "../GreetingCard/GreetingCard";
import Card from "../../types/Card.type";

interface Props {
  savedCards: Card[];
  deleteCard: (id: number) => void;
}

const SavedCards: FC<Props> = ({ savedCards, deleteCard }) => {
  const allCards = savedCards.map((card) => {
    return (
      <GreetingCard
        key={card.id}
        to={card.to}
        quote={card.quote}
        message={card.message}
        from={card.from}
        id={card.id}
        deleteCard={deleteCard}
      />
    );
  });
  return <div className="cards-grid">{allCards}</div>;
};

export default SavedCards;
