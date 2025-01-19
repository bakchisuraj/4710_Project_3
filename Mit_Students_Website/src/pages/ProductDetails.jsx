import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/ProductDetails.css';

const URL = "https://mit-database-3cab6-default-rtdb.firebaseio.com/products.json";

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const res = await axios.get(URL);
            if (res.data) {
                const productData = res.data[id];
                if (productData) {
                    setProduct({ id, ...productData });
                }
            }
        };

        fetchProduct();
    }, [id]);

    if (!product) {
        return <h2>Loading product details...</h2>;
    }

    return (
        <div className="product-details-container">
            <div className="product-details-card">
                <img src={product.image_url} alt={product.product_name} />
                <h1>{product.product_name}</h1>
                <h5>{product.short_description}</h5>
                <h3>Category: {product.category_name}</h3>
                <h2>Price: ₹{product.price}</h2>
                <button>Add To Cart</button>
            </div>
        </div>
    );
};

export default ProductDetails;
