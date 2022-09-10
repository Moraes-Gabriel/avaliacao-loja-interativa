import { Component, OnInit } from '@angular/core';
import { Categoria } from '../models/categoria.model';
import { Fabricante } from '../models/fabricante.model';
import { FabricanteService } from '../services/fabricante.service';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {


  ngOnInit(): void {
    this.service.todas().subscribe((x) => (this.fabricantes = x));
  }

  constructor(private service: FabricanteService, private ProdutoService: ProdutoService) { }

  id: number | any;
  nome: string | any;
  fabricantes: any[] = []; 
  categorias: any[] = []; 
  price: number | any;
  
  fabricanteId: number | any;
  categoriaId: number | any;

  criar() {
    this.ProdutoService.criar({nome: this.nome, fabricanteId: this.fabricanteId,categoriaId: this.categoriaId, price: this.price}).subscribe((x) => {
        console.log("criado");
        
       })
  }

  onChange(deviceValue: any) {
    this.service.buscarCategoriasDoFabricante(deviceValue.target.value).subscribe((categorias) => {
      this.categorias = categorias;
    })
}
}
