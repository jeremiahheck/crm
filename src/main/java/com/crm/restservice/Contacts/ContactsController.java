import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ContactsController {
    private ContactsRepository contactsRepository;

    @GetMapping("/contacts")
    public Iterable<Contact> contact() {
        return contactsRepository.findAll();
    }

}
