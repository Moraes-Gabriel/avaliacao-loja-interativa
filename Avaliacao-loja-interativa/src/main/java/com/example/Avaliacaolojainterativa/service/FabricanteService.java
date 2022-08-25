package com.example.Avaliacaolojainterativa.service;

import com.example.Avaliacaolojainterativa.controller.request.IncluirFabricanteRequest;
import com.example.Avaliacaolojainterativa.controller.response.FabricanteResponse;
import com.example.Avaliacaolojainterativa.controller.response.ProdutoResponse;
import com.example.Avaliacaolojainterativa.model.Categoria;
import com.example.Avaliacaolojainterativa.model.Fabricante;
import com.example.Avaliacaolojainterativa.model.Produto;
import com.example.Avaliacaolojainterativa.repository.FabricanteRepository;
import com.example.Avaliacaolojainterativa.service.buscar.BuscarFabricanteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class FabricanteService {

    @Autowired
    private FabricanteRepository fabricanteRepository;

    @Autowired
    private BuscarFabricanteService buscarFabricanteService;

    @Transactional
    public void incluir(IncluirFabricanteRequest request) {

        List<Categoria> categorias = new ArrayList<>();

        categorias.add(Categoria.builder().nome(request.getCategoria1()).build());
        categorias.add(Categoria.builder().nome(request.getCategoria2()).build());
        categorias.add(Categoria.builder().nome(request.getCategoria3()).build());

        Fabricante fabricante = Fabricante.builder()
                .nome(request.getNome())
                .categorias(categorias)
                .build();

        fabricanteRepository.save(fabricante);
    }

    public List<FabricanteResponse> buscar() {

        List<Fabricante> fabricantes = fabricanteRepository.findAll();
        return fabricantes.stream().map(fabricante -> {
            return FabricanteResponse.builder()
                    .id(fabricante.getId())
                    .nome(fabricante.getNome())
                    .categorias(fabricante.getCategorias())
                    .build();
        }).collect(Collectors.toList());
    }

    public void deleteById(Long fabricanteId) {

        Fabricante fabricante = buscarFabricanteService.porId(fabricanteId);

        fabricanteRepository.deleteById(fabricanteId);
    }

    public List<Categoria> buscarCategoriaPorFabricantesId(Long fabricanteId) {

        Fabricante fabricante = buscarFabricanteService.porId(fabricanteId);

        return fabricante.getCategorias();
    }
}
