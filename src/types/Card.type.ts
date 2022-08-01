type Card = {
  from: string;
  to: string;
  message: string;
  quote: string;
  id: number;
  saveCard?: (card: Card) => void;
  deleteCard: (id: number) => void;
};

export default Card;
