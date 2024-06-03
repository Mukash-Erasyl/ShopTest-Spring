import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductService from '../../service/ProductService';
import { useNavigate } from 'react-router-dom'; 
import PurchaseService from '../../service/PurchaseService';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct = await ProductService.getProductById(id);
        setProduct(fetchedProduct);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleBuyButtonClick = async () => {
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

  

  const handleGoBack = () => {
    navigate(`/`);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
      <p>Availability: {product.availability ? 'In stock' : 'Out of stock'}</p>
      <div className="product-images">
        {product.images.map((image, index) => (
          <img key={index} src={image} alt={product.name} />
        ))}
      </div>
      <button onClick={handleBuyButtonClick}>Купить</button>
      <button onClick={handleGoBack}>Назад</button> {/* Добавляем кнопку "Назад" */}
    </div>
  );
};

export default ProductDetail;
