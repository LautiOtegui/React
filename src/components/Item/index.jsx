import React from 'react'
import './style.css'

const Item = ({product}) => {
    return (
<section className="section-products">
		<div className="container">
				<div className="row justify-content-center text-center">
						<div className="col-md-8 col-lg-6">
								<div className="header">
										<h3>Our Products</h3>
										<h2>Shipment Products</h2>
								</div>
						</div>
				</div>
				<div className="row">
						
						<div className="col-md-6 col-lg-4 col-xl-3">
								<div id="product-1" class="single-product">
										<div class="part-1">
										</div>
										<div className="part-2">
												<h3 className="product-title">{product.name}</h3>
												<h4 className="product-price">{product.price}</h4>
												
										</div>
								</div>
								<button>ADD TO CART</button>
						</div>
						
						<div className="col-md-6 col-lg-4 col-xl-3">
								<div id="product-2" className="single-product">
										<div className="part-1">
												<span className="discount">15% off</span>

										</div>
										<div className="part-2">
                                            <h3 className="product-title">New Balance 550 'Sea Salt Black'</h3>
												<h4 className="product-old-price">$330</h4>
												<h4 className="product-price">$300</h4>												

										</div>
								</div>
								<button className='button-two'>ADD TO CART</button>
						</div>
						
						<div className="col-md-6 col-lg-4 col-xl-3">
								<div id="product-3" className="single-product">
										<div className="part-1">

										</div>
										<div className="part-2">
												<h3 className="product-title">Nike Air Force 1 Low Off White</h3>
												<h4 className="product-price">$1650</h4>
										</div>
								</div>
								<button>ADD TO CART</button>
						</div>
						
						<div className="col-md-6 col-lg-4 col-xl-3">
								<div id="product-4" className="single-product">
										<div className="part-1">
												<span className="new">new</span>

										</div>
										<div className="part-2">
												<h3 className="product-title">Nike Blazer Mid '77 Jumbo</h3>
												<h4 className="product-price">$90</h4>
										</div>
								</div>
								<button>ADD TO CART</button>
						</div>
						
						<div className="col-md-6 col-lg-4 col-xl-3">
								<div id="product-5" className="single-product">
										<div className="part-1">

										</div>
										<div className="part-2">
												<h3 className="product-title">Adidas Yeezy 500 Black</h3>
												<h4 className="product-price">$329</h4>
										</div>
								</div>
								<button>ADD TO CART</button>
						</div>
						
						<div className="col-md-6 col-lg-4 col-xl-3">
								<div id="product-6" className="single-product">
										<div className="part-1">
												<span className="discount">15% off</span>

										</div>
										<div className="part-2">
												<h3 className="product-title">Nike Hot Step Air Terra</h3>
                                                <h4 className="product-old-price">$385</h4>
												<h4 className="product-price">$362</h4>
										</div>
								</div>
								<button>ADD TO CART</button>
						</div>
						
						<div className="col-md-6 col-lg-4 col-xl-3">
								<div id="product-7" className="single-product">
										<div className="part-1">

										</div>
										<div className="part-2">
												<h3 className="product-title">Vans Old Skool 'Flames'</h3>

												<h4 className="product-price">$92</h4>
										</div>
								</div>
								<button>ADD TO CART</button>
						</div>
						
						<div className="col-md-6 col-lg-4 col-xl-3">
								<div id="product-8" className="single-product">
										<div className="part-1">
												<span className="new">new</span>

										</div>
										<div className="part-2">
												<h3 className="product-title">Jordan 11 Retro Low
Cool Grey</h3>
												<h4 className="product-price">$340</h4>
										</div>
								</div>
								<button>ADD TO CART</button>
						</div>
				</div>
		</div>
</section>
    )
}


export default Item