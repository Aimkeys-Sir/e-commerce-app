function ProductCard({name, image, price }) {
    return (
        <div className="card" style={{width: 22 + 'rem'}}>
            <img src={image} className="card-img-top" alt={name}/>
            <div className="card-body">
                <h6 className="card-title">{name}</h6>

                <h6 className="card-title text-danger">Price: KSH {price}</h6>

                {/* <NavLink to={"/games/"+id} className="btn btn-primary">More Details</NavLink> */}
            </div>
        </div>
    )
}
export default ProductCard