import  React, {useState} from 'react' ;

export default function NewProductForm() {
    const [formData, setFormData] = useState(
        {
            name: "",
            description: "",
            category: "",
            weight: "",
            dimensions: "",
            price: "",
            seller_id: "",
            discount: "",
            image: ""
        }
    );

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((formData) => ({
            ...formData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label><br />
                <input
                    type="text" name="name"
                    placeholder="product_name"
                    value={formData.name}
                    onChange={handleChange}
                /><br />
                <label htmlFor="description">Description:</label><br />
                <input
                    type="text" name="description"
                    placeholder="product_description"
                    value={formData.description}
                    onChange={handleChange}
                /><br />
                <label htmlFor="category">Category:</label><br />
                <input
                    type="text" name="category"
                    placeholder="product_category"
                    required
                    value={formData.category}
                    onChange={handleChange}
                /><br />
                <label htmlFor="weight">Weight:</label><br />
                <input
                    type="text" name="weight"
                    placeholder="product_weight"
                    required
                    value={formData.weight}
                    onChange={handleChange}
                /><br />
                <label htmlFor="dimensions">Dimensions:</label><br />
                <input 
                    type="text" name="dimensions"
                    placeholder="product_dimensions"
                    required
                    value={formData.dimensions}
                    onChange={handleChange}
                /><br />
                <label htmlFor="price">Price(Ksh):</label><br />
                <input
                    type="text" name="price"
                    placeholder="product_price"
                    required
                    value={formData.price}
                    onChange={handleChange}
                /><br />
                <label htmlFor="seller_id">Seller ID:</label><br />
                <input 
                    type="text" name="seller_id"
                    placeholder="product_seller_id"
                    required
                    value={formData.seller_id}
                    onChange={handleChange}
                /><br />
                <label htmlFor="discount">Discount:</label><br />
                <input 
                    type="text" name="discount"
                    placeholder="product_discount"
                    value={formData.discount}
                    onChange={handleChange}
                /><br />
                <label htmlFor="image">Image:</label><br />
                <input 
                    type="text" name="image"
                    placeholder="image_url"
                    required
                    value={formData.image}
                    onChange={handleChange}
                /><br />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}
