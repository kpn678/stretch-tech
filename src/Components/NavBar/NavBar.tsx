import React, { FC } from 'react';
import { Link } from 'react-router-dom'
import './NavBar.css';


const NavBar: FC = () => {
    return (
        <Link to={'/'} style={{textDecoration: 'none'}}>
            <h1>Card Generator</h1>
        </Link>
    );
};

export default NavBar;

