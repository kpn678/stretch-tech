import React, { useState, ChangeEvent, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './CardForm.css'
import Card from "../../types/Card.type"

interface Props {
    selectCard:(card: Card) => void
    choice: string
}

const CardForm = ({selectCard, choice}:Props) => {
    const [to, setTo] = useState<string>('')
    const [quote, setQuote] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const [from, setFrom] = useState<string>('')
    const [serverError, setServerError] = useState<string>('')

    const getQuote = async (): Promise<any> => {
        if (choice === "none") {
            showError();
        }
        let URL;
        if (choice === 'compliment') {
            URL = 'https://complimentr.com/api'
        } else {
            URL = 'https://geek-jokes.sameerkumar.website/api?format=json'
        } 
        try {
            const response = await fetch(URL)
            const quote = await response.json()
            setQuote(quote[choice])
        } catch(error: any) {
            setServerError("Sorry, we can't load this page right now. Maybe go read a book or something?")
            console.log(error)
        }
    }

    const showError= () => {
        setServerError("Your choice isn't loading. Please return to the homepage and make a new choice!")
    }

    useEffect(() => {
        getQuote()
    }, [])

    const createCard = (): void => {
        const card = {
            to: to,
            quote: quote,
            message: message,
            from: from,
            id: Date.now()
        }
        selectCard(card)
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
            { serverError ? <h2>{serverError}</h2> : 
                <>
                    <label htmlFor='to-input'>To: 
                        <input type='text' name='to-input' value={to} onChange={ event => handleChange(event)} data-cy='to-input'/> 
                    </label>
                    <h2 data-cy='quote'>{quote}</h2>
                    <textarea placeholder='Add message here...' name='message-input' onChange={ event => handleChange(event)} value={message} data-cy='message-input'/>
                    <label htmlFor='from-input'>From: 
                        <input type='text' name='from-input' onChange={ event => handleChange(event)} value={from} data-cy='from-input'/> 
                    </label>
                    <div className='form-buttons'>
                        <Link to="/preview-card" onClick={() => createCard()}>
                            <button className='make-card-button' data-cy='make-card-button'>Make my card!</button>
                        </Link>
                        <button className='get-quote-button' data-cy='get-quote-button' onClick={(event) => {
                            event.preventDefault()
                            getQuote()}}>{`Get new ${choice}!`}
                        </button>
                    </div>
                </>
            }
        </form>
    )
}

export default CardForm;
