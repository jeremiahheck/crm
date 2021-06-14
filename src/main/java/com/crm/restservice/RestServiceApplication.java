import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class RestServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(RestServiceApplication.class, args);
    }

//    @Bean
//    public CommandLineRunner demo(ContactsRepository contactsRepository) {
//        return (args) -> {
//            // save a few customers
//            contactsRepository.save(new Contact("Jeremiah", "Heck", "emial@email"));
//        };
//    }

}
