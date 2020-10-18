package com.example.tpe4spb.repository;

import com.example.tpe4spb.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
