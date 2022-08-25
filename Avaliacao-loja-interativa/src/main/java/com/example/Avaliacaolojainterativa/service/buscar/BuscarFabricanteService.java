package com.example.Avaliacaolojainterativa.service.buscar;

import com.example.Avaliacaolojainterativa.model.Categoria;
import com.example.Avaliacaolojainterativa.model.Fabricante;
import com.example.Avaliacaolojainterativa.repository.CategoriaRepository;
import com.example.Avaliacaolojainterativa.repository.FabricanteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import static org.springframework.http.HttpStatus.NOT_FOUND;

@Service
public class BuscarFabricanteService {

    @Autowired
    private FabricanteRepository repository;

    public Fabricante porId(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(NOT_FOUND, "Fabricante não encontrada"));
    }
}
