import React from 'react';
import CartWidget from '../CartWidget';
import './style.css';
import logo from '../../img/logo.jpg'



const NavBar = () => {

    return(
        <>

    <nav>
    <img className='logo_nav' alt='shipment' src={logo}/>
        <ul>
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>
            <CartWidget/>
        </ul>
    </nav>
    </>)
}

export default NavBar