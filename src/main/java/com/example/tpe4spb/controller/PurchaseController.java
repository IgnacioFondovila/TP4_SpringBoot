package com.example.tpe4spb.controller;


import com.example.tpe4spb.dto.ClientBalanceReportDTO;
import com.example.tpe4spb.dto.PurchaseQueryDTO;
import com.example.tpe4spb.model.Product;
import com.example.tpe4spb.model.Purchase;
import com.example.tpe4spb.repository.PurchaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("purchases")
public class PurchaseController {

    @Qualifier("purchaseRepository")
    @Autowired
    private final PurchaseRepository repo;

    //Se declara el repo----------------------------------
    public PurchaseController (@Qualifier("purchaseRepository") PurchaseRepository repository){
        this.repo = repository;
    }

    //Métodos CRUD aquí abajo------------------------------
    @GetMapping("")
    public Iterable<Purchase> getPurchases(){
        return repo.findAll();
    }

    @GetMapping("/mostsell")
    public List<Product> getProductMostBuy(){
        return repo.findMostSell();
    }

    @GetMapping("/{id}")
    public Optional<Purchase> one(@PathVariable Long id){
        return repo.findById(id);
    }

    @PostMapping("/")
    public Purchase newPurchase(@RequestBody Purchase purchase){
        return repo.save(purchase);
    }

    @DeleteMapping("/{id}")
    void deletePerson(@PathVariable Long id) {
        repo.deleteById(id);
    }

    @PutMapping("/{id}")
    Purchase replacePurchase(@RequestBody Purchase newPurchase, @PathVariable Long id) {

        return repo.findById(id)
                .map(purchase -> {
                    if(newPurchase.getCount()!=null){
                        purchase.setCount(newPurchase.getCount());
                    }
                    if(newPurchase.getDay()!=null) {
                        purchase.setDay(newPurchase.getDay());
                    }
                    if(newPurchase.getMonth()!=null) {
                        purchase.setMonth(newPurchase.getMonth());
                    }
                    if(newPurchase.getYear()!=null) {
                        purchase.setYear(newPurchase.getYear());
                    }
                    return repo.save(purchase);
                })
                .orElseGet(() -> {
                    newPurchase.setId(id);
                    return repo.save(newPurchase);
                });
    }

    //Método para obtener el reporte diario de ventas-----------------------------
//    @GetMapping("/report")
//    public List<PurchaseQueryDTO> report(){
//        return repo.getBalanceForClients();
//    }
    @GetMapping("/report/clients")
    public List<ClientBalanceReportDTO> getClientsReport() {
        ArrayList<PurchaseQueryDTO> pq=(ArrayList<PurchaseQueryDTO>) repo.getBalanceForClients();
        ArrayList<ClientBalanceReportDTO> cbr= new ArrayList<ClientBalanceReportDTO>();
        for (int i = 0; i <pq.size(); i++) {
            PurchaseQueryDTO aux = pq.get(i);
            ClientBalanceReportDTO cb = new ClientBalanceReportDTO(aux.getClientName(),aux.getPrice_x_Product(),aux.getTotalUnits());
            cbr.add(cb);
        }
//        cbr.sort();
        return cbr;
    }

    @GetMapping("/report/day/{day}/month/{month}/year/{year}")
    List<Purchase> getClientsReport(@PathVariable Integer day,@PathVariable Integer month,@PathVariable Integer year) {
        return repo.getDayBalance(day,month,year);
    }


}

