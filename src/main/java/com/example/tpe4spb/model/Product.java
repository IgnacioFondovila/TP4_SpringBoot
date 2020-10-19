package com.example.tpe4spb.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
public class Product {
        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        private Long id;
        @Column
        private String name;
        @Column
        private Integer price ;
        @Column
        private Integer stock ;
        @OneToMany(mappedBy = "product")
        @JsonIgnore
        private List<Purchase> purchases;

        public Product(){
                super();
        }

        public Product(String name, Integer price, Integer stock) {
                this.name = name;
                this.price = price;
                this.stock = stock;
        }


        public Long getId() {
                return id;
        }

        public void setId(Long id) {
                this.id = id;
        }

        public String getName() {
                return name;
        }

        public void setName(String name) {
                this.name = name;
        }

        public Integer getPrice() {
                return price;
        }

        public void setPrice(Integer price) {
                this.price = price;
        }

        public Integer getStock() {
                return stock;
        }

        public void setStock(Integer stock) {
                this.stock = stock;
        }

        public List<Purchase> getPurchases() {
                return purchases;
        }

        public void setPurchases(List<Purchase> purchases) {
                this.purchases = purchases;
        }
}
