package com.example.Avaliacaolojainterativa.controller.response;

import lombok.Builder;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import static javax.persistence.GenerationType.IDENTITY;

@Data
@Builder
public class CategoriaResponse {

    private Long id;
    private String nome;
}
