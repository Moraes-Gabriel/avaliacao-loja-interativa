package com.example.Avaliacaolojainterativa.service;

import com.example.Avaliacaolojainterativa.controller.request.IncluirProdutoRequest;
import com.example.Avaliacaolojainterativa.model.Categoria;
import com.example.Avaliacaolojainterativa.model.Fabricante;
import com.example.Avaliacaolojainterativa.model.Produto;
import com.example.Avaliacaolojainterativa.repository.CategoriaRepository;
import com.example.Avaliacaolojainterativa.repository.FabricanteRepository;
import com.example.Avaliacaolojainterativa.repository.ProdutoRepository;
import com.example.Avaliacaolojainterativa.service.buscar.BuscarCategoriaService;
import com.example.Avaliacaolojainterativa.service.buscar.BuscarFabricanteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class IncluirProdutoService {

    @Autowired
    private ProdutoRepository produtoRepository;

   @Autowired
   private BuscarCategoriaService buscarCategoriaService;
   @Autowired
   private BuscarFabricanteService buscarFabricanteService;
    public void incluir(IncluirProdutoRequest request) {

        Categoria categoria = buscarCategoriaService.porId(request.getCategoriaId());
        Fabricante fabricante = buscarFabricanteService.porId(request.getFabricanteId());

        Produto produto = Produto.builder()
                .nome(request.getNome())
                .categoria(categoria)
                .fabricante(fabricante)
                .price(request.getPrice())
                .build();

        produtoRepository.save(produto);
    }
}
