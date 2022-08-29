import React from 'react';
import CartWidget from '../CartWidget';
import './style.css';

const NavBar = () => {
    return(
        <>

    <nav>
        <ul>
            <li>Home</li>
            <li>Production</li>
            <li>Drumkits</li>
            <li>Contact</li>
            <CartWidget/>
        </ul>
    </nav>
    
    </>)
}

export default NavBar