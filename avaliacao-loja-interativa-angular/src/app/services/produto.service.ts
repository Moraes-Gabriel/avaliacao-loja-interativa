import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private listaProduto: any[];
  private url = 'http://localhost:8080/produto';

  constructor(private httpClient: HttpClient) {
    this.listaProduto = [];
  }
  get fabricante() {
    return this.listaProduto;
  }
  criar(produto: any) {
    return this.httpClient.post<any>(this.url, produto);
  }

  editar(produto: any) {
    return this.httpClient.put<any>(this.url, produto);
  }
  todas() {
    return this.httpClient.get<Produto[]>(this.url+ "/listar");
  }
}