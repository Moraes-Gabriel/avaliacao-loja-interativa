package com.example.Avaliacaolojainterativa.controller.response;

import com.example.Avaliacaolojainterativa.model.Categoria;
import com.example.Avaliacaolojainterativa.model.Fabricante;
import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
@Builder
public class ProdutoResponse {

    @NotBlank
    private Long id;

    @NotBlank
    private String nome;

    @NotBlank
    private Categoria categoria;

    @NotBlank
    private Fabricante fabricante;

    @NotBlank
    private Double price;
}
