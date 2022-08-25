package com.example.Avaliacaolojainterativa.controller.response;

import com.example.Avaliacaolojainterativa.model.Categoria;
import lombok.Builder;
import lombok.Data;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.OneToMany;
import java.util.List;

@Data
@Builder
public class FabricanteResponse {

    private Long id;
    private String nome;
    private List<Categoria> categorias;

}
