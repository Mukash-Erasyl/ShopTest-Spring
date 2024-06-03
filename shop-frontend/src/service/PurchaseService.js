import axios from 'axios';

const API_URL = 'http://localhost:8080/api/purchase';

const PurchaseService = {
  // Функция для имитации покупки продукта
  purchaseProduct: async (productId) => {
    try {
      const response = await axios.post(API_URL, { productId });
      return response.data; // Возвращаем данные о результате покупки
    } catch (error) {
      console.error('Error purchasing product:', error);
      throw error; // Пробрасываем ошибку для обработки в компоненте
    }
  }
};

export default PurchaseService;
