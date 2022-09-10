import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/produto.model';
import { ProdutosComponent } from '../produtos/produtos.component';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrls: ['./tabela-produtos.component.scss']
})
export class TabelaProdutosComponent implements OnInit {

  constructor(private service: ProdutoService) { }

  produtos: Produto[] = [];
  produtosFiltrado: Produto[] = [];
  filtrar: string | any;
 
  ngOnInit(): void {
    this.service.todas().subscribe((x) => this.produtos = x)
  }
  
  onChangeFilter() {
  this.produtosFiltrado = this.produtos.filter(produto => {
    return produto.nome.includes(this.filtrar);
  })
  }
}
