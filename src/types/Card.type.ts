type Card = {
    from: string;
    to: string;
    message: string;
    quote: string;
    id?: number;
    saveCard?: (card: Card) => void
}

export default Card;