package com.example.tpe4spb.repository;

import com.example.tpe4spb.dto.ClientBalanceReportDTO;
import com.example.tpe4spb.dto.PurchaseQueryDTO;
import com.example.tpe4spb.model.Purchase;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PurchaseRepository extends JpaRepository<Purchase, Long> {
//        @Query( "SELECT concat(c.name, ' ', c.surname), p.count,pr.price FROM Purchase p , Client c,Product pr WHERE p.client = c.dni AND p.product = pr.id");

    @Query("SELECT c.name,c.surname, pu.count,pr.price FROM Purchase pu JOIN pu.client c JOIN pu.product pr")
    public List<PurchaseQueryDTO> getBalanceForClients();


//@Query( "SELECT  c.surname, p.count FROM PURCHASE p JOIN p.client");
    //    public List<PurchaseQueryDTO> findAllBySurname(String@Query("SELECT t FROM Person t where t.surname = :surname")
//    public List<> findAllBySurname(String surname);
//
//    @Query("SELECT t FROM Person t where t.name = :name")
//    public List<Person> findAllByName(String name);
}
