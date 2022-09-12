import { Component, Input, OnInit } from '@angular/core';
import { FabricanteService } from '../services/fabricante.service';
import { ProdutoService } from '../services/produto.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Produto } from '../models/produto.model';
import { Fabricante } from '../models/fabricante.model';
import { Categoria } from '../models/categoria.model';

@Component({
  selector: 'app-modal-editar-produtos',
  templateUrl: './modal-editar-produtos.component.html',
  styleUrls: ['./modal-editar-produtos.component.scss']
})


export class ModalEditarProdutosComponent implements OnInit {

  @Input() produto!: Produto | any;

  ngOnInit(): void {
    this.fabricanteService.todas().subscribe((x) => (this.fabricantes = x 
    ));
   this.produtoEdicao = {...this.produto};
  }

  constructor(private fabricanteService: FabricanteService, private produtoService: ProdutoService,
    public activeModal: NgbActiveModal) { }

  produtoEdicao!: Produto;

  fabricantes: any[] = [];
  categorias: Categoria[] = [];

  fabricanteId: number | any;
  categoriaId: number | any;

  editar() {
    this.produtoService.editar({
      id: this.produto?.id, nome: this.produtoEdicao?.nome, fabricanteId: this.fabricanteId,
      categoriaId: this.categoriaId, price: this.produtoEdicao?.price
    }).subscribe((x) => {
      console.log("editado" + x);
    })
  }
 

  onChange(deviceValue: any) {
    this.fabricanteService.buscarCategoriasDoFabricante(deviceValue.target.value).subscribe((categorias) => {
      this.categorias = categorias;
    })
  }
  onClickFecharModal() {
    this.activeModal.close();
  }
}