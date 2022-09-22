import ProductDetails from "./ProductDetails";
import ProductImage from "./ProductImage";

export default function ProductPage(){
    return (
        <div className="product-page">
            <ProductImage/>
            <ProductDetails/>
        </div>
    )
}