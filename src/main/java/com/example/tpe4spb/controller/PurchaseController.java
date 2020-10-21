package com.example.tpe4spb.controller;


import com.example.tpe4spb.dto.ClientBalanceElemDTO;
import com.example.tpe4spb.dto.ClientsBalanceReportDTO;
import com.example.tpe4spb.model.Product;
import com.example.tpe4spb.model.Purchase;
import com.example.tpe4spb.repository.PurchaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;

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

    //Método para conseguir el producto más vendido de todos---------------------
    @GetMapping("/mostsell")
    public List<Product> findMostSell(){
        return repo.findMostSell(PageRequest.of(0,1));
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
    void deletePurchase(@PathVariable Long id) {
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

    //Método que da el reporte diario totall-------------------------------------------
    @GetMapping("/report/day/{day}/month/{month}/year/{year}")
    List<Purchase> getClientsReport(@PathVariable Integer day,@PathVariable Integer month,@PathVariable Integer year) {
        return repo.getDayBalance(day,month,year);
    }

    //Método para obtener el reporte total de ventas por cliente---------------------------
    @GetMapping("/report")
    public ClientsBalanceReportDTO report(){
        List<ClientBalanceElemDTO> p=repo.getBalanceForClients();
        ClientsBalanceReportDTO c= new ClientsBalanceReportDTO(p);
        return c;
    }
//    @GetMapping("/report/clients")
//    public List<ClientBalanceElemDTO> getClientsReport() {
//        ArrayList<ClientsBalanceReportDTO> pq=(ArrayList<ClientsBalanceReportDTO>) repo.getBalanceForClients();
//        ArrayList<ClientBalanceElemDTO> cbr= new ArrayList<ClientBalanceElemDTO>();
//        for (int i = 0; i <pq.size(); i++) {
//            ClientsBalanceReportDTO aux = pq.get(i);
//            ClientBalanceElemDTO cb = new ClientBalanceElemDTO(aux.getClientName(),aux.getPrice_x_Product(),aux.getTotalUnits());
//            cbr.add(cb);
//        }
////        cbr.sort();
//        return cbr;
//    }

}

