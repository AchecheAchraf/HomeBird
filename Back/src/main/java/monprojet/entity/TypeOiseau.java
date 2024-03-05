package monprojet.entity;
import lombok.NonNull;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
public class TypeOiseau {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idType;

    @NonNull
    private String nomType;

    @NonNull
    private String type;

    @NonNull
    private String espece;
}
