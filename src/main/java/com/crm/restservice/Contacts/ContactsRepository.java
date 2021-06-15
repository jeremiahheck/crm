package com.crm.restservice.Contacts;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;
import java.util.Optional;

@RepositoryRestResource(path = "contacts")
public interface ContactsRepository extends CrudRepository<Contact, Long> {
    List<Contact> findAll();
    List<Contact> findByFirstName(String firstName);
    Optional<Contact> findById(long id);
}
