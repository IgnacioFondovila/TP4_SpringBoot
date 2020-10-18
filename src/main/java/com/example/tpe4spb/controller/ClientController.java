package com.example.tpe4spb.controller;

import com.example.tpe4spb.model.Client;
import com.example.tpe4spb.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("clients")
public class ClientController {

    @Qualifier("clientRepository")
    @Autowired
    private final ClientRepository repo;

    //Se declara el repo----------------------------------
    public ClientController (@Qualifier("clientRepository") ClientRepository repository){
        this.repo = repository;
    }

    //Métodos CRUD aquí abajo------------------------------
    @GetMapping("/")
    public Iterable<Client> getClients(){
        return repo.findAll();
    }

    @GetMapping("/{dni}")
    public Optional<Client> one(@PathVariable Long dni){
        return repo.findById(dni);
    }

    @PostMapping("/")
    public Client newClient(@RequestBody Client client){
        return repo.save(client);
    }

    @DeleteMapping("/{dni}")
    void deletePerson(@PathVariable Long dni) {
        repo.deleteById(dni);
    }

    @PutMapping("/{dni}")
    Client replaceClient(@RequestBody Client newClient, @PathVariable Long dni) {

        return repo.findById(dni)
                .map(client -> {
                    client.setName(newClient.getName());
                    client.setSurname(newClient.getSurname());
                    client.setPurchases(newClient.getPurchases());
                    return repo.save(client);
                })
                .orElseGet(() -> {
                    newClient.setDni(dni);
                    return repo.save(newClient);
                });
    }

}
