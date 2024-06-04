import React, { useState, useEffect } from 'react';
import ProductService from '../../service/ProductService'; // Путь к вашему сервису
import "./ToggleButton.css"; // Путь к файлу стилей

const ToggleButton = ({ product }) => {
  const [loading, setLoading] = useState(false);
  const [isInBucket, setIsInBucket] = useState(product.isInBucket);

  useEffect(() => {
    setIsInBucket(product.isInBucket); // Обновляем значение isInBucket при изменении продукта
  }, [product]);

  const handleClick = async () => {
    setLoading(true); // Устанавливаем состояние загрузки в true перед отправкой запроса
    setIsInBucket(!isInBucket)
    try {
      await ProductService.updateProductInBucket(product);
      // После успешного обновления запросить свежие данные о продукте
      const updatedProduct = await ProductService.getProductById(product.id);
      if (updatedProduct) {
        setIsInBucket(updatedProduct.isInBucket);
      }
    } catch (error) {
      console.error('Error updating product in bucket:', error);
    } finally {
      setLoading(false); // Устанавливаем состояние загрузки обратно на false
    }
  };

  return (
    <button className={`toggle-button ${loading ? 'loading' : ''}`} onClick={handleClick}>
      {loading ? 'Загрузка...' : (isInBucket ? 'Удалить из корзины' : 'Добавить в корзину')}
    </button>
  );
};

export default ToggleButton;
