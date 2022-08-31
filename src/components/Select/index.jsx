import React from "react";
import './style.css';

const Select = ({handleColor}) => {
    return (
        <select name="navColor" id="navColor" onChange={handleColor}>
            <option value="azul">Azul</option>
            <option value="rojo">Rojo</option>
            <option value="negro">Negro</option>
            <option value="default">Default</option>
        </select>
    );
};

export default Select;