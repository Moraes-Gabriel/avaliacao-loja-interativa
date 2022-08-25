package com.example.Avaliacaolojainterativa.service.buscar;

import com.example.Avaliacaolojainterativa.model.Categoria;
import com.example.Avaliacaolojainterativa.repository.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import static org.springframework.http.HttpStatus.NOT_FOUND;

@Service
public class BuscarCategoriaService {

    @Autowired
    private CategoriaRepository repository;

    public Categoria porId(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(NOT_FOUND, "Categoria não encontrada"));
    }
}
