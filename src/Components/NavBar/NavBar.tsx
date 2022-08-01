import React, { FC } from 'react';
import { Link } from 'react-router-dom'
import './NavBar.css';


const NavBar: FC = () => {
    return (
        <nav>
            <Link to={'/'} style={{textDecoration: 'none'}}>
                <h1>Card Party</h1>
            </Link>
            <Link to={'/saved-cards'} style={{textDecoration: 'none'}}>
                <button className='show-saved-button'data-cy='show-saved'>Saved <br></br> Cards</button>
            </Link>
        </nav>

    );
};

export default NavBar;

