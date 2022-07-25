import React, { FC, useState, ChangeEvent } from 'react';
import './CardForm.css';

const CardForm: FC = () => {

    const [to, setTo] = useState<string>('')
    const [quote, setQuote] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const [from, setFrom] = useState<string>('')

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
            <h2></h2>
            <textarea placeholder='Add message here...' name='message-input' onChange={ event => handleChange(event)} value={message} data-cy='message-input'/>
            <label htmlFor='from-input'>From: 
                <input type='text' name='from-input' onChange={ event => handleChange(event)} value={from} data-cy='from-input'/> 
            </label>
        </form>
    );
    
};

export default CardForm;