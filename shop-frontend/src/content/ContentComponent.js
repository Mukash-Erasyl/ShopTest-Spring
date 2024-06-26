import React, { useEffect, useState } from 'react';
import './ContentComponent.css';
import ProductService from '../service/ProductService';
import { useNavigate } from 'react-router-dom'; 
import PurchaseService from '../service/PurchaseService';
import ToggleButton from '../bucket/ToggleButtonComponent/ToggleButton';
import img from "../img/span1.png"


const ContentComponent = () => {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productList = await ProductService.getAllProducts();
        setProducts(productList || []);
      } catch (error) {
        console.error('There was an error fetching the products!', error);
      }
    };

    fetchProducts();
  }, []);

  const handleProductClick = (id) => {
    navigate(`/products/${id}`);
  };


  const handleBuyButtonClick = async (id) => {
    try {
      // Отправляем запрос к сервису для имитации покупки
      const purchaseResult = await PurchaseService.purchaseProduct(id);
      console.log(purchaseResult); 
      alert(purchaseResult)
      // Можно добавить дополнительную логику в зависимости от результата покупки
    } catch (error) {
      console.error('Error purchasing product:', error);
    }
  };

  
  const handlePurchaseClick = (id) => {
    console.log(`Product with ID ${id} purchased!`);
    // Здесь можно добавить логику для обработки покупки
  };

  return (
    <div>
      <h1>Product Catalog</h1>
      <div className="product-list">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product._id} className="product-item">
              <h2 onClick={() => handleProductClick(product._id)}>{product.name}</h2>
              <p>{product.description}</p>
              <p>Price: {product.price}</p>
              <p>Availability: {product.availability ? 'In stock' : 'Out of stock'}</p>
              <div className="product-images">
                {product.images && product.images.map((image, index) => (
                  <img key={index} src={require(`../img/${image}`)} alt={product.name} />

                ))}
              </div>
              <button onClick={() => handleBuyButtonClick(product._id)}>Купить сейчас</button>
              <ToggleButton product={product} />
              

            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
};

export default ContentComponent;
