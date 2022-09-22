export default function ProductDetails() {
    return (
        <div className="product-details">
            <h2>{"Drop type cusion chair"}</h2>
            <div className="reviews">
                <img />
                <p className="strong">{"8/10"}.</p>
                <p className="grey">{'15'} Reviews</p>
            </div>
            <div>
                <div className="circle">
                </div>
                <div className="circle">
                </div>
            </div>
            <div>
                <p className="grey">{"Premium & comfortable memory foam with strong structure built with teakwood, it feels amazing."}</p>
            </div>
            <div>
                <div>
                    <div>
                        <p className="grey">HEIGHT</p>
                        <div>
                            <p className="strong">{"52"}</p>
                            <p className="grey-small">{"cm"}</p>
                        </div>
                    </div>

                    <div>
                        <p className="grey">WIDTH</p>
                        <div>
                            <p className="strong">{"43"}</p>
                            <p className="grey-small">{"cm"}</p>
                        </div>
                    </div>
                </div>
                <button id="change-units">view in {"inches"}</button>
            </div>
            <h3></h3>
        </div>
    )
}