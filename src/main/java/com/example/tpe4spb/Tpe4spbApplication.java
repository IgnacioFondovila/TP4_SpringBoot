package com.example.tpe4spb;

import com.example.tpe4spb.model.Client;
import com.example.tpe4spb.repository.ClientRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@SpringBootApplication
public class Tpe4spbApplication {

    public static void main(String[] args) {
        SpringApplication.run(Tpe4spbApplication.class, args);

    }
}
