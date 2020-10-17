package com.example.tpe4spb.model;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

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

        public Product(){
                super();
        }

        public Product(String name, Integer price, Integer stock) {
                this.name = name;
                this.price = price;
                this.stock = stock;
        }
}
