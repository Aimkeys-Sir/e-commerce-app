import './style/product-page.css'

export default function ProductImage() {
    return (
        <div className='product-image'>
            <img id='main-image' src='/images/chair1.png' alt='product'/>
            <div className='partial'>
                <div className='part one'>
                    <img src='/images/chair1.png' alt='product'/>
                </div>
                <div className='part two'>
                    <img src='/images/chair1.png' alt='product'/>
                </div>
                <div className='part three'>
                    <img src='/images/chair1.png' alt='product'/>
                </div>
            </div>
        </div>
    )
}