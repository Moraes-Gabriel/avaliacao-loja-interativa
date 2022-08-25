package com.example.Avaliacaolojainterativa.service;

import com.example.Avaliacaolojainterativa.model.Fabricante;
import com.example.Avaliacaolojainterativa.model.Produto;
import com.example.Avaliacaolojainterativa.repository.CategoriaRepository;
import com.example.Avaliacaolojainterativa.repository.ProdutoRepository;
import com.example.Avaliacaolojainterativa.service.buscar.BuscarProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class DeleteProdutoByIdService {

    @Autowired
    private ProdutoRepository produtoRepository;

    @Autowired
    private BuscarProdutoService buscarProdutoService;

    @Autowired
    private CategoriaRepository categoriaRepository;
    @Transactional
    public void deleteById(Long produtoId) {

        Produto produto = buscarProdutoService.porId(produtoId);

        produto.setCategoria(null);
        produto.setFabricante(null);
        produtoRepository.save(produto);
        produtoRepository.delete(produto);
    }
}
