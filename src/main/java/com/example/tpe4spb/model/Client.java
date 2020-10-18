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
        @OneToMany(mappedBy = "client")
        private List<Purchase> purchases;

        public Client() {
        }

        public Client(Long dni, String name, String surname){
            this.dni = dni;
            this.name = name;
            this.surname = surname;
        }


        //Getters y setters..-------------------------------------
        //No los tendría que hacer Loombok automáticamente??
        //Se colocaron para que no tire error en su Controller

        public String getName() {
            return name;
        }
        public void setName(String name) {
            this.name = name;
        }

        public String getSurname() {
            return surname;
        }
        public void setSurname(String surname) {
            this.surname = surname;
        }

        public Long getDni() {
            return dni;
        }
        public void setDni(Long dni) {
            this.dni = dni;
        }

        public List<Purchase> getPurchases() {
            return purchases;
        }
        public void setPurchases(List<Purchase> purchases) {
            this.purchases = purchases;
        }
}
