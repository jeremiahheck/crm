package com.crm.restservice.Contacts;

import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;


public interface ContactsRepository extends CrudRepository<Contact, Long> {
    List<Contact> findAll();
    List<Contact> findByFirstName(String firstName);
    Optional<Contact> findById(long id);
}