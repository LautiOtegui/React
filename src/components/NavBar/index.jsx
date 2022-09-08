import React from 'react';
import CartWidget from '../CartWidget';
import Select from '../Select';
import './style.css';
import logo from '../../img/logo.png'
import { useState } from 'react';



const NavBar = () => {

    const [navColor, setNavColor] = useState("#f3f3f3")

    const onChangeColor = (event) => {
        const color = event.target.value;
        setNavColor(color)
    }

    console.log(navColor);
    return(
        <>

    <nav>
    <img className='logo_nav' alt='drumkit' src={logo}/>
        <ul>
            <li>Home</li>
            <li>Production</li>
            <li>Drumkits</li>
            <li>Contact</li>
            <CartWidget/>
        </ul>
    </nav>
    <Select handleColor={onChangeColor}/>
    </>)
}

export default NavBar