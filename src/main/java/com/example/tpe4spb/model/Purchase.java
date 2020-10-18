package com.example.tpe4spb.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
public class Purchase {

        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        private Long id;

        @Column
        private Integer count;
        //Fecha o conjunto de variables?
        //@Column
        //private Date date;
        // @
        @Column
        private Integer day;
        @Column
        private Integer month;
        @Column
        private Integer year;

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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getCount() {
        return count;
    }

    public void setCount(Integer count) {
        this.count = count;
    }

    public Integer getDay() {
        return day;
    }

    public void setDay(Integer day) {
        this.day = day;
    }

    public Integer getMonth() {
        return month;
    }

    public void setMonth(Integer month) {
        this.month = month;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
    }
}
