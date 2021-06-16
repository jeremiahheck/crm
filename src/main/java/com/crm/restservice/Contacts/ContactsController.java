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
            if (!contactsRepository.findById(1).isPresent()) {
                contactsRepository.save(new Contact("Jeremiah", "Heck", "email.email"));
            }
            return (ArrayList<Contact>)contactsRepository.findAll();
        } else {
            ArrayList<Contact> something = new ArrayList<Contact>();
            something.add(new Contact("Jeremiah", "Heck", "email.email"));
            return something;
        }
    }

    @PostMapping(path="/addContact")
    public void createContact(Contact contact) {
        contactsRepository.save(contact);
    }

    @PutMapping(path="/updateContact/{id}")
    public void updateContact(Contact newContact,@PathVariable(value="id") long id) {
        for (Contact elem: contactsRepository.findAll()) {
            if (elem.getId() == id) {
                elem.setFirstName(newContact.getFirstName());
                elem.setLastName(newContact.getLastName());
                elem.setEmail(newContact.getEmail());
            }
        }
    }

    @DeleteMapping(path="/deleteContact/{id}")
    public void deleteContact(@PathVariable(value="id")long id) throws Exception {
        contactsRepository.deleteById(id);
    }


}
