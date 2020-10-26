package com.example.tpe4spb.repository;

import com.example.tpe4spb.dto.ClientBalanceElemDTO;
import com.example.tpe4spb.model.Client;
import com.example.tpe4spb.model.Product;
import com.example.tpe4spb.model.Purchase;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PurchaseRepository extends JpaRepository<Purchase, Long> {
//        @Query( "SELECT concat(c.name, ' ', c.surname), p.count,pr.price FROM Purchase p , Client c,Product pr WHERE p.client = c.dni AND p.product = pr.id");
//    @Query("SELECT concat(c.name,' ', c.surname), pu.count,pr.price FROM Purchase pu JOIN pu.client c JOIN pu.product pr")
    @Query("SELECT new com.example.tpe4spb.dto.ClientBalanceElemDTO(CONCAT(c.name,' ',c.surname), (pu.count*pr.price)) FROM Purchase pu JOIN pu.client c JOIN pu.product pr")
    public List<ClientBalanceElemDTO> getBalanceForClients();

    @Query("SELECT p FROM Purchase p where  p.day=:day AND p.month=:month AND p.year=:year")
    public List<Purchase> getDayBalance(Integer day,Integer month, Integer year);

//    @Query("INSERT p in purchase p where client = p.client and client")
//    public boolean save2(Purchase pur)

    @Query("SELECT COUNT(p) FROM Purchase p WHERE p.client = :client AND p.day = :day AND p.month = :month AND p.year = :year AND p.product = :product")
    public int getPurchasesOfClient(Client client, int day, int month, int year, Product product);

//    @Query  ("SELECT p.product FROM Purchase p GROUP BY p.product ORDER BY p.count DESC")
    @Query  ("SELECT p.product FROM Purchase p GROUP BY p.product ORDER BY SUM(p.count) DESC")
    public List<Product> findMostSell(PageRequest page);
}

//@Query( "SELECT  c.surname, p.count FROM PURCHASE p JOIN p.client");
    //    public List<ClientsBalanceReportDTO> findAllBySurname(String@Query("SELECT t FROM Person t where t.surname = :surname")
//    public List<> findAllBySurname(String surname);
//
//    @Query("SELECT t FROM Person t where t.name = :name")
//    public List<Person> findAllByName(String name);

