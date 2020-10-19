package com.example.tpe4spb.controller;

import com.example.tpe4spb.model.Product;
import com.example.tpe4spb.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("products")
public class ProductController {

    @Qualifier("productRepository")
    @Autowired
    private final ProductRepository repo;

    //Se declara el repo----------------------------------
    public ProductController (@Qualifier("productRepository") ProductRepository repository){
        this.repo = repository;
    }

    //Métodos CRUD aquí abajo------------------------------
    @GetMapping("")
    public Iterable<Product> getProducts(){
        return repo.findAll();
    }


    @GetMapping("/{id}")
    public Optional<Product> one(@PathVariable Long id){
        return repo.findById(id);
    }

    @PostMapping("/")
    public Product newProduct(@RequestBody Product product){
        return repo.save(product);
    }

    @DeleteMapping("/{id}")
    void deletePerson(@PathVariable Long id) {
        repo.deleteById(id);
    }

    @PutMapping("/{id}")
    Product replaceProduct(@RequestBody Product newProduct, @PathVariable Long id) {

        return repo.findById(id)
                .map(product -> {
                    if(newProduct.getName()!=null){
                        product.setName(newProduct.getName());
                    }
                    if(newProduct.getPrice()!=null){
                        product.setPrice(newProduct.getPrice());
                    }
                    if(newProduct.getStock()!=null){
                        product.setStock(newProduct.getStock());
                    }
                    product.setPurchases(newProduct.getPurchases());
                    return repo.save(product);
                })
                .orElseGet(() -> {
                    newProduct.setId(id);
                    return repo.save(newProduct);
                });
    }

}
