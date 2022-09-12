package com.example.Avaliacaolojainterativa.controller;

import com.example.Avaliacaolojainterativa.controller.request.EditarProdutoRequest;
import com.example.Avaliacaolojainterativa.controller.request.IncluirProdutoRequest;
import com.example.Avaliacaolojainterativa.controller.response.ProdutoResponse;
import com.example.Avaliacaolojainterativa.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/produto")
@CrossOrigin

public class ProdutoController {

    @Autowired
    private IncluirProdutoService incluirProdutoService;

    @Autowired
    private GetListProdutoService getListProdutoService;

    @Autowired
    private ListarProdutoPorPesquisarService listarProdutoPorPesquisarService;
    @Autowired
    private EditarProdutoService editarProdutoService;
   @Autowired
    private DeleteProdutoByIdService deleteProdutoByIdService;
    @PostMapping()
    public void incluir(@RequestBody IncluirProdutoRequest request) {
        incluirProdutoService.incluir(request);
    }

    @GetMapping("/listar")
    public List<ProdutoResponse> buscarTodas() {
        return getListProdutoService.buscar();
    }

    @GetMapping("/listar/pesquisar/{nome}")
    public List<P   rodutoResponse> buscarTodas(@PathVariable String nome) {
        return listarProdutoPorPesquisarService.buscar(nome);
    }
    @PutMapping()
    public void editar(@RequestBody EditarProdutoRequest request) {
        editarProdutoService.editar(request);
    }

    @DeleteMapping("/{produtoId}")
    public void deleteProduto(@PathVariable Long produtoId) {
        deleteProdutoByIdService.deleteById(produtoId);
    }
}
