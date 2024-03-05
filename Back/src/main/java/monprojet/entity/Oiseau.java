package monprojet.entity;
import jakarta.persistence.ManyToOne;
import lombok.NonNull;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


public class Oiseau {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idUser;

    @NonNull
    private String couleur;

    @NonNull
    private Float taille;

    @NonNull
    private String dateDepart;

    @NonNull
    TypeOiseau typeOiseau;
}
