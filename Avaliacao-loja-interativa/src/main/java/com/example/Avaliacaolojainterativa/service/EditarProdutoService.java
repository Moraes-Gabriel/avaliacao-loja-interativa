package com.example.Avaliacaolojainterativa.service;

import com.example.Avaliacaolojainterativa.controller.request.EditarProdutoRequest;
import com.example.Avaliacaolojainterativa.model.Categoria;
import com.example.Avaliacaolojainterativa.model.Fabricante;
import com.example.Avaliacaolojainterativa.model.Produto;
import com.example.Avaliacaolojainterativa.repository.ProdutoRepository;
import com.example.Avaliacaolojainterativa.service.buscar.BuscarCategoriaService;
import com.example.Avaliacaolojainterativa.service.buscar.BuscarFabricanteService;
import com.example.Avaliacaolojainterativa.service.buscar.BuscarProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EditarProdutoService {

    @Autowired
    private ProdutoRepository produtoRepository;

    @Autowired
    private BuscarProdutoService buscarProdutoService;

    @Autowired
    private BuscarFabricanteService buscarFabricanteService;

    @Autowired
    private BuscarCategoriaService buscarCategoriaService;

    public void editar(EditarProdutoRequest request) {
        Produto produto = buscarProdutoService.porId(request.getId());
        Categoria categoria = buscarCategoriaService.porId(request.getCategoriaId());
        Fabricante fabricante = buscarFabricanteService.porId(request.getFabricanteId());

        produto.setNome(request.getNome());
        produto.setCategoria(categoria);
        produto.setFabricante(fabricante);
        produto.setPrice(request.getPrice());

        produtoRepository.save(produto);
    }
}
