package com.crm.restservice.Contacts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class ContactsController {

    @Autowired
    private ContactsRepository contactsRepository;


    @GetMapping("/contacts")
    public ArrayList<Contact> contact() {
        if (contactsRepository.findAll() != null) {
            return new ArrayList<Contact>(contactsRepository.findAll());
        }
        return null;
    }

    @PostMapping(path="/addContact")
    public void createContact(@RequestBody Contact contact) {
        contactsRepository.save(contact);
    }

    @PutMapping(path="/updateContact/{id}")
    public void updateContact(@RequestBody Contact newContact, @PathVariable(value="id")long id) {

        for (Contact elem: contactsRepository.findAll()) {
            if (elem.getId() == id) {
                elem.setFirstName(newContact.getFirstName());
                elem.setLastName(newContact.getLastName());
                elem.setEmail(newContact.getEmail());
                contactsRepository.save(elem);
            }
        }
    }

    @DeleteMapping(path="/deleteContact/{id}")
    public void deleteContact(@PathVariable(value="id")long id) throws Exception {
        contactsRepository.deleteById(id);
    }


}
