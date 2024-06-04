import axios from 'axios';

const API_URL = 'http://localhost:8080/api/products';




class ProductService {
  async getAllProducts() {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  }

  async getProductById(id) {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching product by ID:', error);
      return null;
    }
  }

  async createProduct(product) {
    try {
      const response = await axios.post(API_URL, product);
      return response.data;
    } catch (error) {
      console.error('Error creating product:', error);
      return null;
    }
  }

  async updateProduct(id, product) {
    try {
      const response = await axios.put(`${API_URL}/${id}`, product);
      return response.data;
    } catch (error) {
      console.error('Error updating product:', error);
      return null;
    }
  }

  async deleteProduct(id) {
    try {
      const response = await axios.delete(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting product:', error);
      return null;
    }
  }

  async searchProducts(keyword) {
    try {
      const response = await axios.get(`${API_URL}/search?keyword=${keyword}`);
      return response.data;
    } catch (error) {
      console.error('Error searching for products:', error);
      return [];
    }
  }
  
  async findByInBucket() {
    try {
      const response = await axios.get(`${API_URL}/inBucket`);
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  }

  async  updateProductInBucket (product) {
    try {
      const response = await axios.put(`${API_URL}/${product._id}`, {
        name : product.name , 
        description:product.description , 
        images:product.images , 
        price:product.price , 
        availability:product.availability , 
        inBucket:!product.inBucket , 
      });
      return response.data; // Возвращает данные, возвращенные сервером после обновления
    } catch (error) {
      throw error; // Обработка ошибок, если они возникли при выполнении запроса
    }
  } 

  
}


export default new ProductService();
