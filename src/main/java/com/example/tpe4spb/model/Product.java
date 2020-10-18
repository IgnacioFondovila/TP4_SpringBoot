package com.example.tpe4spb.model;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
@Data
public class Product {
        @Id
        private Long id;
        @Column
        private String name;
        @Column
        private Integer price ;
        @Column
        private Integer stock ;
        @OneToMany(mappedBy = "product")
        private List<Purchase> purchases;

        public Product(){
                super();
        }

        public Product(String name, Integer price, Integer stock) {
                this.name = name;
                this.price = price;
                this.stock = stock;
        }
}
