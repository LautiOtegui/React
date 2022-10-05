import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import ItemCount from "../ItemCount";

const ItemDetail = ({ product }) => {
    const [count, setCount] = useState(1);
    const [compra, setCompra] = useState(false);
    const { name, price, stock, img, id } = product;
    const navegar = useNavigate();
    const { addItem, addItem2 } = useCart();

    const onAdd = () => {
    let purchase = {
        id,
        name,
        price,
        stock,
        img,
        quantity: count,
    };
    setCompra(true);

    addItem(purchase);
    addItem2(product,count);

    };

    return (
        
            <div className="detail-container">
                <img
                    className="detail-img"
                    src={product.image}width ="250px" height="250px"
                    alt="product-detail"
                />
                <div className="detail-subcontainer">
                    <h1>{product.title}</h1>
                    { !compra 
        ? <ItemCount stock={stock} initial={1} onAdd={onAdd} count={count} setCount={setCount}/>
        : <div style={{display:'flex', justifyContent:'space-around', alignItems:'center'}}>
            <button style={{width:'8rem'}} className="btn btn-warning" onClick={()=>navegar('/')}>Seguir Comprando</button>
            <button className="btn btn-info" onClick={()=>navegar('/cart')}>Ir al carrito</button>
            </div>}
                </div>
            </div>
        )
    };

export default ItemDetail;
