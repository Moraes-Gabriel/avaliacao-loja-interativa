import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fabricante } from '../models/fabricante.model';
import { Categoria } from '../models/categoria.model';


@Injectable({
  providedIn: 'root'
})
export class FabricanteService {

  private listaFabricante: any[];
  private url = 'http://localhost:8080/fabricante';

  constructor(private httpClient: HttpClient) {
    this.listaFabricante = [];
  }

  get fabricante() {
    return this.listaFabricante;
  }
  criar(fabricante: Fabricante) {
    return this.httpClient.post<Fabricante>(this.url, fabricante);
  }
  todas() {
    return this.httpClient.get<Fabricante[]>(this.url+ "/listar");
  }
  buscarCategoriasDoFabricante(categoriaId: number){
    console.log(categoriaId);
    
    return this.httpClient.get<Categoria[]>(this.url+ `/listar/categorias/${categoriaId}`);
  }
}
