package com.example.tpe4spb.model;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
@Data
public class Client {

        @Id
        private Long dni;
        @Column
        private String name;
        @Column
        private String surname;
        @OneToMany
        private List<Purchase> purchases;


        public Client() {
        }

        public Client(Long dni, String name, String surname){
            this.dni = dni;
            this.name = name;
            this.surname = surname;
        }

    }
