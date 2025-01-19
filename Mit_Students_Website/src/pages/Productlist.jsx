// Productlist.js
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../style/Productlist.css';

const URL = "https://mit-database-3cab6-default-rtdb.firebaseio.com/products.json";

const Productlist = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('');

    const navigate = useNavigate();

    const viewproduct = (id) => {
        navigate(`/product/${id}`);
    };

    // Fetch Product List
    const fetchProductList = async () => {
        const res = await axios.get(URL);
        if (res.data) {
            const products = Object.keys(res.data).map(key => ({ id: key, ...res.data[key] }));
            setData(products);
            setFilteredData(products);
        }
    };

    useEffect(() => {
        fetchProductList();
    }, []);

    // Handle Search
    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);
        const filtered = data.filter(product =>
            product.product_name.toLowerCase().includes(term) ||
            product.short_description.toLowerCase().includes(term)
        );
        setFilteredData(filtered);
    };

    // Handle Sort
    const handleSort = (e) => {
        const option = e.target.value;
        setSortOption(option);
        let sortedData = [...filteredData];
        if (option === 'priceAsc') {
            sortedData.sort((a, b) => a.price - b.price);
        } else if (option === 'priceDesc') {
            sortedData.sort((a, b) => b.price - a.price);
        } else if (option === 'nameAsc') {
            sortedData.sort((a, b) => a.product_name.localeCompare(b.product_name));
        } else if (option === 'nameDesc') {
            sortedData.sort((a, b) => b.product_name.localeCompare(a.product_name));
        }
        setFilteredData(sortedData);
    };

    return (
        <>
        <div className="search-sort-div">
        <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>

            <div className="sort-options">
                <select value={sortOption} onChange={handleSort}>
                    <option value="">Sort By</option>
                    <option value="priceAsc">Price: Low to High</option>
                    <option value="priceDesc">Price: High to Low</option>
                    <option value="nameAsc">Name: A to Z</option>
                    <option value="nameDesc">Name: Z to A</option>
                </select>
            </div>


        </div>
          

        <div className="container">
            

            

            <div className="product-grid">
                {filteredData.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.image_url} alt={product.product_name} className="product-image" />
                        <h1>{product.product_name}</h1>
                        <h5>{product.short_description}</h5>
                        <h3>Category: {product.category_name}</h3>
                        <h2>Price: ₹{product.price}</h2>
                        <div className="product-actions">
                            <button onClick={() => viewproduct(product.id)}>View</button>
                            {/* <button onClick={() => addtocart(product.id)}>ADD to Cart</button> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default Productlist;
