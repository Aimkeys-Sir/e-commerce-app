import { useState } from "react"

export default function ProductDetails() {
    const [productsNumber,setProductsNumber]=useState(1)
    return (
        <div className="product-details">
            <div className="content">
                <p className="grey capital">{"PREMIUM CHAIRS"}</p>
                <h3 id="product-name">{"Drop type cushion chair"}</h3>
                <div className="reviews">
                    <img src="/icons/star.svg" id="star" />
                    <p className="strong">{"8/10"}</p>
                    <p className="strong dot">.</p>
                    <p className="grey">{'15'} Reviews</p>
                </div>
                <div className="circles">
                    <div className="circle1">
                    </div>
                    <div className="circle2">
                    </div>
                </div>
                <div className="description">
                    <p className="grey">{"Premium & comfortable memory foam with a strong structure built with teakwood, it feels amazing."}</p>
                </div>
                <div className="dimensions">
                    <div className="height-width">
                        <div className="width height">
                            <p className="grey capital">HEIGHT</p>
                            <div>
                                <p className="strong width-p">{"52"}</p>
                                <p className="grey-small">{"cm"}</p>
                            </div>
                        </div>

                        <div className="width">
                            <p className="grey capital">WIDTH</p>
                            <div>
                                <p className="strong width-p">{"43"}</p>
                                <p className="grey-small">{"cm"}</p>
                            </div>
                        </div>
                    </div>
                    <p className="change-units grey">view in {"inches"}</p>
                </div>
                <p id="cash">{"Ksh2000"}</p>
                <div className="add-product">
                    <button  onClick={()=>setProductsNumber(num=>num>1?parseInt(num)-1:num)}  className="add-button" id="minus">-</button>
                    <input onChange={(e)=>setProductsNumber(e.target.value)} id="product-number" type={"number"} min="1" value={productsNumber}/>
                    <button onClick={()=> setProductsNumber(num=>parseInt(num)+1)} className="add-button" id="plus">+</button>
                </div>
                <div className="to-cart-buy">
                    <div className="add-to-cart" id="to-cart">ADD TO CART</div>
                    <div className="add-to-cart" id="buy-now">BUY NOW</div>
                </div>
            </div>
        </div>
    )
}