package com.example.tpe4spb.controller;


import com.example.tpe4spb.model.Purchase;
import com.example.tpe4spb.repository.PurchaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("purchases")
public class PurchaseController {

    @Qualifier("purchaseRepository")
    @Autowired
    private final PurchaseRepository repo;

    //Se declara el repo----------------------------------
    public PurchaseController (@Qualifier("purchaseRepository") PurchaseRepository repository){
        this.repo = repository;
    }

    //Métodos CRUD aquí abajo------------------------------
    @GetMapping("/")
    public Iterable<Purchase> getPurchases(){
        return repo.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Purchase> one(@PathVariable Long id){
        return repo.findById(id);
    }

    @PostMapping("/")
    public Purchase newPurchase(@RequestBody Purchase purchase){
        return repo.save(purchase);
    }

    @DeleteMapping("/{id}")
    void deletePerson(@PathVariable Long id) {
        repo.deleteById(id);
    }

    @PutMapping("/{id}")
    Purchase replacePurchase(@RequestBody Purchase newPurchase, @PathVariable Long id) {

        return repo.findById(id)
                .map(purchase -> {
                    purchase.setCount(newPurchase.getCount());
                    purchase.setDay(newPurchase.getDay());
                    purchase.setMonth(newPurchase.getMonth());
                    purchase.setYear(newPurchase.getYear());
                    return repo.save(purchase);
                })
                .orElseGet(() -> {
                    newPurchase.setId(id);
                    return repo.save(newPurchase);
                });
    }

}

