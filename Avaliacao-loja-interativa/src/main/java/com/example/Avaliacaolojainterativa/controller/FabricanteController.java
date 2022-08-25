package com.example.Avaliacaolojainterativa.controller;

import com.example.Avaliacaolojainterativa.controller.request.IncluirFabricanteRequest;
import com.example.Avaliacaolojainterativa.controller.response.FabricanteResponse;
import com.example.Avaliacaolojainterativa.controller.response.ProdutoResponse;
import com.example.Avaliacaolojainterativa.model.Categoria;
import com.example.Avaliacaolojainterativa.model.Fabricante;
import com.example.Avaliacaolojainterativa.service.FabricanteService;
import com.example.Avaliacaolojainterativa.service.GetListProdutoService;
import com.example.Avaliacaolojainterativa.service.IncluirProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/fabricante")
@CrossOrigin
public class FabricanteController {

    @Autowired
    private FabricanteService fabricanteService;

    @Autowired
    private GetListProdutoService getListProdutoService;
    @PostMapping()
    public void incluir(@RequestBody IncluirFabricanteRequest request) {
        fabricanteService.incluir(request);
    }

    @GetMapping("/listar")
    public List<FabricanteResponse> buscarTodas() {
        return fabricanteService.buscar();
    }

    @GetMapping("/listar/categorias/{fabricanteId}")
    public List<Categoria> buscarCategoriaPorFabricantesId(@PathVariable  Long fabricanteId) {
        return fabricanteService.buscarCategoriaPorFabricantesId(fabricanteId);
    }

    @DeleteMapping("/{fabricanteId}")
    public void deleteFabricante(@PathVariable Long fabricanteId) {
        fabricanteService.deleteById(fabricanteId);
    }
}
