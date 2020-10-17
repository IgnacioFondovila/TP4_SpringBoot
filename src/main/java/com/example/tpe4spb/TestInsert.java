package com.example.tpe4spb;

import com.example.tpe4spb.model.Client;
import com.example.tpe4spb.repository.ClientRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@Slf4j
class TestInsert {
        @Bean
        CommandLineRunner initDatabase (@Qualifier("clientRepository") ClientRepository repository){
            return args -> {
                repository.save(new Client((long) 1234, "Seba", "Perez"));
                repository.save(new Client((long) 2345, "Juan", "Dominguez"));
            };
        }
}
