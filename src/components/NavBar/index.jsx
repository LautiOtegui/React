import React from 'react';
import CartWidget from '../CartWidget';
import './style.css';
import logo from '../../img/logo.jpg'
import { Link } from "react-router-dom";




const NavBar = () => {

    return(
        <>

    <nav>
    <img className='logo_nav' alt='shipment' src={logo}/>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/category/men's clothing">Men's clothing</Link></li>
                <li>
                    <Link to="/category/jewelery">Jewelery</Link>
                </li>
            <CartWidget/>
        </ul>
    </nav>
    </>)
}

export default NavBar