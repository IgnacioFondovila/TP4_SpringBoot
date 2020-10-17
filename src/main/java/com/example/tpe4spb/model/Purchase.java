package com.example.tpe4spb.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
public class Purchase implements serializable {
        @Column
        private Integer  count;
        @Id
        @MapsId
        @ManyToOne
        private Product product;
        @Id
        @MapsId
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
