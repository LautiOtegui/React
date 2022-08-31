import React, {useState, useEffect} from "react";
import './style.css';

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial);

    const handleAdd = () => {
        if(count < stock) {
            setCount(count+1);
        } else {
            alert("No hay stock disponible");
        }
    }

    const handleDecrement = () => {
    }

    const addCart = () => {
        onAdd(count);
        setCount(initial);
    }


    useEffect(()=> {
        console.log("Se montó el ItemCount");
    }, []);


    useEffect(()=> {
        console.log("Se actualiza el estado!")
    }, [count]);

    return (
    <div>
        <button className="less-button" onClick={handleDecrement}>-</button>
        <h2>{count}</h2>
        <button className="more-button" onClick={handleAdd}>+</button>
        <button className="cart-button" onClick={addCart}>Agregar al carro</button>
    </div>
    );
};

export default ItemCount;