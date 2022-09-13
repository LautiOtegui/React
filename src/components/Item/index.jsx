import React from 'react'
import './style.css'
import {useNavigate} from 'react-router-dom';

const Item = ({product}) => {
	const navigate = useNavigate();

	const handleNavigate = () => {
	navigate(`/detail/${product.id}`)
	}
    return (
										<div className="card-container" onClick={handleNavigate}>
												

												<img className='card-img' src={product.image} alt="product"/>
												<h3 className="card-title">{product.name}</h3>
												<h4 className="card-price">{product.price}</h4>
										</div>
    )
}


export default Item