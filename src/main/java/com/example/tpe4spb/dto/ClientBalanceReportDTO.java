package com.example.tpe4spb.dto;

public class ClientBalanceReportDTO {

    private String name;
    private Integer balance;

    public ClientBalanceReportDTO(){}
    public ClientBalanceReportDTO(String name, int pr, int cnt ) {
        this.name = name;
        this.setBalance(pr, cnt);
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

    public void setBalance(int pr,int cnt) {
        this.balance = pr*cnt;
    }
}
