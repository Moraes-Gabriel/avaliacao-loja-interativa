package com.example.Avaliacaolojainterativa.controller.request;

import lombok.Data;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;


@Data
public class IncluirProdutoRequest {

    @NotBlank
    private String nome;

    @NotBlank
    private Long categoriaId;

    @NotBlank
    private Long fabricanteId;

    @NotBlank
    private Double price;
}
