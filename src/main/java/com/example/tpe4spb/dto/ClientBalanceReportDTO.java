package com.example.tpe4spb.dto;

public class ClientBalanceReportDTO {

    private String name;
    private Integer balance;

//    private int aux;

    public ClientBalanceReportDTO(){}
//    public ClientBalanceReportDTO(String name, int pr, int cnt ) {
//    Devuelve la multiplicacion directamente
        public ClientBalanceReportDTO(String name, int balance) {
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
