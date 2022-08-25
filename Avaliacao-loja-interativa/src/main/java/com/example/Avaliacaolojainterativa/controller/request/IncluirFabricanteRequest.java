package com.example.Avaliacaolojainterativa.controller.request;

import lombok.Data;

import javax.validation.constraints.NotBlank;

@Data
public class IncluirFabricanteRequest {

    @NotBlank
    private String nome;
    @NotBlank
    private String categoria1;
    @NotBlank
    private String categoria2;
    @NotBlank
    private String categoria3;
}
