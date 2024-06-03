package com.example.TestShop.service;

import com.example.TestShop.domain.Product;
import com.example.TestShop.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> findAll() {
        return productRepository.findAll();
    }

    public Optional<Product> findById(String id) {
        return productRepository.findById(id);
    }

    public Product save(Product product) {
        return productRepository.save(product);
    }

    public void deleteById(String id) {
        productRepository.deleteById(id);
    }

    public Product update(Product product) {
        // Проверяем, существует ли товар с таким ID
        Optional<Product> existingProduct = productRepository.findById(product.get_id());
        if (existingProduct.isPresent()) {
            // Если товар существует, обновляем его
            return productRepository.save(product);
        } else {
            // Если товар не найден, вернем null или бросим исключение
            // в зависимости от вашей логики
            return null;
        }
    }

    public List<Product> searchByKeyword(String keyword) {
        return productRepository.findByTitleOrGenreOrTagsContaining(keyword);
    }
}
