import React, { FC, useState, ChangeEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CardForm.css';

interface Props {
    selectCard:(card: object) => void
}

const CardForm = ({selectCard}:Props) => {

    const [to, setTo] = useState<string>('')
    const [quote, setQuote] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const [from, setFrom] = useState<string>('')

    const getCompliment = async (): Promise<any> => {
        const URL = 'https://complimentr.com/api'
        const response = await fetch(URL)
        const quote = await response.json()
        setQuote(quote.compliment)
    }

    useEffect(() => {
        getCompliment()
    }, [])

    const createCard = (): void => {
        const card = {
            to: to,
            quote: quote,
            message: message,
            from: from
        }
        console.log(card)
        selectCard(card);
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        if (event.target.name === 'to-input') {
            setTo(event.target.value)
        } else if (event.target.name === 'message-input') {
            setMessage(event.target.value) 
        } else {
            setFrom(event.target.value)
        }
    } 

    return (
        <form>
            <label htmlFor='to-input'>To: 
                <input type='text' name='to-input' value={to} onChange={ event => handleChange(event)} data-cy='to-input'/> 
            </label>
            <h2>{quote}</h2>
            <textarea placeholder='Add message here...' name='message-input' onChange={ event => handleChange(event)} value={message} data-cy='message-input'/>
            <label htmlFor='from-input'>From: 
                <input type='text' name='from-input' onChange={ event => handleChange(event)} value={from} data-cy='from-input'/> 
            </label>
            <div>
                
                <Link to="/preview-card" onClick={() => createCard()}>
                    <button>Make my card!</button>
                </Link>
                
                
                <button onClick={(event) => {
                    event.preventDefault()
                    getCompliment()}}>Get new compliment
                </button>
                <Link to="/">
                    <button>Take me home!</button>
                </Link>
            </div>
        </form>
    );
    
};

export default CardForm;


// https://complimentr.com/api
    //https://geek-jokes.sameerkumar.website/api?format=json
    //https://type.fit/api/quotes