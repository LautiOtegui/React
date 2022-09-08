import React from 'react'
import './style.css'

const Item = ({product}) => {
    return (
        <div className="d-flex justify-content-center container mt-5">
        <div className="card p-3 bg-white">
            <div className="about-product text-center mt-2">
                <div>
                    <h6>{product.name}</h6>
                </div>
            </div>
            <div className="stats mt-2">
                <div className="d-flex justify-content-between p-price"><span>Drumkit XMAS Louri</span></div>
            </div>
            <div className="d-flex justify-content-between total font-weight-bold mt-4"><span>Price</span><span>$30</span></div>
        </div>
    </div>
    )
}


export default Item