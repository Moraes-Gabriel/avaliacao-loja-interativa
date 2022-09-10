import { Component, OnInit } from '@angular/core';
import { FabricanteService } from '../services/fabricante.service';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-modal-editar-produtos',
  templateUrl: './modal-editar-produtos.component.html',
  styleUrls: ['./modal-editar-produtos.component.scss']
})
export class ModalEditarProdutosComponent implements OnInit {

  ngOnInit(): void {
    this.fabricanteService.todas().subscribe((x) => (this.fabricantes = x));
  }

  constructor(private fabricanteService: FabricanteService, private produtoService: ProdutoService) { }

  id: number | any;
  nome: string | any;
  fabricantes: any[] = []; 
  categorias: any[] = []; 
  price: number | any;
  
  fabricanteId: number | any;
  categoriaId: number | any;

  criar() {
    this.produtoService.criar({nome: this.nome, fabricanteId: this.fabricanteId,
       categoriaId: this.categoriaId, price: this.price}).subscribe((x) => {
        console.log("criado" + x);
       })
  }

  onChange(deviceValue: any) {
    this.fabricanteService.buscarCategoriasDoFabricante(deviceValue.target.value).subscribe((categorias) => {
      this.categorias = categorias;
    })

}

}