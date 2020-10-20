package com.example.tpe4spb.dto;

public class ClientBalanceElemDTO {

    private String name;
    private Integer balance;

//    private int aux;

    public ClientBalanceElemDTO(){}

//    public ClientBalanceElemDTO(String name, int pr, int cnt ) {
//    Devuelve la multiplicacion directamente
        public ClientBalanceElemDTO(String name, int balance) {
            this.name = name;
            this.balance = balance;
//        this.setBalance(pr, cnt);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getBalance() {
        return balance;
    }
//
    public void setBalance(int balance) {
        this.balance = balance;
    }
}
