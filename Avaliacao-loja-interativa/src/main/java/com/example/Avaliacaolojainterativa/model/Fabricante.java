package com.example.Avaliacaolojainterativa.model;

import jdk.jfr.Category;
import lombok.*;

import javax.persistence.*;

import java.util.List;

import static javax.persistence.GenerationType.IDENTITY;

@NoArgsConstructor
@AllArgsConstructor
@ToString(of = "id")
@EqualsAndHashCode(of = "id")
@Getter
@Setter
@Entity
@Builder
public class Fabricante {


    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String nome;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "CATEGORIA_MAPPING", joinColumns =
    @JoinColumn(name = "FABRICANTE_ID"), inverseJoinColumns = @JoinColumn(name = "CATEGORIA_ID"))
    private List<Categoria> categorias;

}
