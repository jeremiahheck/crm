package com.crm.restservice.Contacts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.ArrayList;


@RestController
public class ContactsController {

    @Autowired
    private ContactsRepository contactsRepository;

    @GetMapping("/contacts")
    public ArrayList<Contact> contact() {
        if (contactsRepository.findAll() != null) {
            contactsRepository.save(new Contact("Jeremiah", "Heck", "email.email"));
            return (ArrayList<Contact>)contactsRepository.findAll();
        } else {
            ArrayList<Contact> sumthin = new ArrayList<Contact>();
            sumthin.add(new Contact("Jeremiah", "Heck", "email.email"));
            return sumthin;
        }
    }

    @PostMapping(path="/contacts/addContact")
    public void createContact(Contact contact) {
        contactsRepository.save(contact);
    }

    @PutMapping(path="/contacts/updateContact/{id}")
    public void updateContact(Contact newContact,@PathVariable(value="id") long id) {
        for (Contact elem: contactsRepository.findAll()) {
            if (elem.getId() == id) {
                elem.setFirstName(newContact.getFirstName());
                elem.setLastName(newContact.getLastName());
                elem.setEmail(newContact.getEmail());
            }
        }
    }

    @DeleteMapping(path="/contacts/deleteContact/{id}")
    public void deleteContact(@PathVariable(value="id")long id) throws Exception {
        contactsRepository.deleteById(id);
    }


}
