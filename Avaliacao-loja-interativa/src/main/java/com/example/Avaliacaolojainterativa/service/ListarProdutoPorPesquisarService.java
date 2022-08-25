package com.example.Avaliacaolojainterativa.service;

import com.example.Avaliacaolojainterativa.controller.response.ProdutoResponse;
import com.example.Avaliacaolojainterativa.model.Produto;
import com.example.Avaliacaolojainterativa.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;


@Service
public class ListarProdutoPorPesquisarService {

    @Autowired
    private ProdutoRepository produtoRepository;

    public List<ProdutoResponse> buscar(String procurar) {

        List<Produto> produtos = produtoRepository.findProdutoByNomeStartingWithIgnoreCase(procurar);

        return produtos.stream().map(produto -> {
            return ProdutoResponse.builder().id(produto.getId()).nome(produto.getNome()).price(produto.getPrice()).fabricante(produto.getFabricante()).categoria(produto.getCategoria()).build();
        }).collect(Collectors.toList());
    }
}
