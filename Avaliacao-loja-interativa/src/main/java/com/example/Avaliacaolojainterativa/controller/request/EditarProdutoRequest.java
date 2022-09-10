package com.example.Avaliacaolojainterativa.controller.request;

import lombok.Data;

import javax.validation.constraints.NotBlank;


@Data
public class EditarProdutoRequest {

    @NotBlank
    private Long id;
    @NotBlank
    private String nome;

    @NotBlank
    private Long categoriaId;

    @NotBlank
    private Long fabricanteId;

    @NotBlank
    private Double price;
}
