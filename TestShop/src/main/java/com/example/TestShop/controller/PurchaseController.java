package com.example.TestShop.controller;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PurchaseController {

    @PostMapping("/api/purchase")
    @CrossOrigin(origins = "http://localhost:3001")
    public String purchaseProduct(@RequestBody String productId) {
        // Здесь можно добавить логику для имитации покупки
        // Например, просто возвращаем сообщение об успешной покупке
        return "Товар с ID " + productId + " успешно куплен!";
    }
}
