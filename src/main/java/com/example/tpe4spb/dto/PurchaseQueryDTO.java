package com.example.tpe4spb.dto;

public class PurchaseQueryDTO {

    private String clientName;
    private Integer totalUnits;
    private Integer price_x_Product;

    public PurchaseQueryDTO(String clientName, Integer totalUnits, Integer price_x_Product) {
        this.clientName = clientName;
        this.totalUnits = totalUnits;
        this.price_x_Product = price_x_Product;
    }

    public String getClientName() {
        return clientName;
    }

    public void setClientName(String clientName) {
        this.clientName = clientName;
    }

    public int getTotalUnits() {
        return totalUnits;
    }

    public void setTotalUnits(int totalUnits) {
        this.totalUnits = totalUnits;
    }

    public int getPrice_x_Product() {
        return price_x_Product;
    }

    public void setPrice_x_Product(int price_x_Product) {
        this.price_x_Product = price_x_Product;
    }
}
