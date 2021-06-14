package com.crm.restservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class RestServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(RestServiceApplication.class, args);
    }

//    @Bean
//    public CommandLineRunner demo(com.crm.restservice.Contacts.ContactsRepository contactsRepository) {
//        return (args) -> {
//            // save a few customers
//            contactsRepository.save(new com.crm.restservice.Contacts.Contact("Jeremiah", "Heck", "emial@email"));
//        };
//    }

}
