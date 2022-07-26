import React, { FC } from 'react';
import './CardPreview.css';

interface Props {
    currentCard: {};
    saveCard: (card: object) => void
}

const CardPreview: FC<Props> = ({currentCard, saveCard}) => {
    return (
        <div>hello</div>
    );
};

export default CardPreview;