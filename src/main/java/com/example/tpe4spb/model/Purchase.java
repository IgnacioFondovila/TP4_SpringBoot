package com.example.tpe4spb.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Purchase {

        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        private int id;

        @Column
        private Integer count;

        @ManyToOne
        private Product product;

        @ManyToOne
        private Client client;


    public Purchase() {
        super();
    }
    public Purchase(Integer count, Product product, Client client) {
        this.count = count;
        this.product = product;
        this.client = client;
    }

}
