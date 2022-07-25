import React, { FC } from 'react';
import './CardForm.css';

const CardForm: FC = () => {
  
    return (
        <form>
            <label htmlFor='to-input'>To: 
                <input type='text' name='to-input' data-cy='to-input'/> 
            </label>
            <h2></h2>
            <textarea placeholder='Add message here...' name='message-input' data-cy='message-input'/>
            <label htmlFor='from-input'>From: 
                <input type='text' name='from-input' data-cy='from-input'/> 
            </label>
        </form>
    );
    
};

export default CardForm;