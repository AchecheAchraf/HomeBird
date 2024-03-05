package monprojet.entity;

import jakarta.persistence.*;
import lombok.NonNull;
import lombok.ToString;

import java.util.ArrayList;
import java.util.List;

public class Observation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idObservation;

    @NonNull
    private String dateArrive;

    @NonNull
    private Oiseau oiseau;

    @NonNull
    @ManyToOne(optional = false) // obligatoire, la clé étrangère ne doit pas être nulle
    User user;
}
