package com.example.TestShop.controller;



import com.example.TestShop.domain.Product;
import com.example.TestShop.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:3001")
public class ProductController {

    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public List<Product> getAllProducts() {
        return productService.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable String id) {
        Optional<Product> product = productService.findById(id);
        return product.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Product> createProduct(@RequestBody Product product) {
        Product createdProduct = productService.save(product);
        return ResponseEntity.ok(createdProduct);
    }
    @PutMapping("/{id}")
    public ResponseEntity<String> updateProduct(@PathVariable String id, @RequestBody Product productDetails) {
        Optional<Product> productOptional = productService.findById(id);
        if (productOptional.isPresent()) {
            Product product = productOptional.get();
            // Обновляем данные товара из productDetails
            product.setName(productDetails.getName());
            product.setDescription(productDetails.getDescription());
            product.setImages(productDetails.getImages());
            product.setPrice(productDetails.getPrice());
            product.setAvailability(productDetails.isAvailability());
            product.setCount(productDetails.getCount());
            // Сохраняем обновленный товар
            Product updatedProduct = productService.save(product);
            // Формируем сообщение об успешном обновлении
            String message = String.format("Товар с id %s был обновлен.", id);
            return ResponseEntity.ok(message);
        } else {
            // Если товар с указанным id не найден, возвращаем ошибку "Not Found"
            return ResponseEntity.notFound().build();
        }
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable String id) {
        productService.deleteById(id);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/search")
    public List<Product> searchComix(@RequestParam String keyword) {
        return productService.searchByKeyword(keyword);
    }
}
