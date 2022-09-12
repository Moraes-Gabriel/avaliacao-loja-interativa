import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalEditarProdutosComponent } from '../modal-editar-produtos/modal-editar-produtos.component';
import { Produto } from '../models/produto.model';
import { ProdutosComponent } from '../produtos/produtos.component';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrls: ['./tabela-produtos.component.scss']
})
export class TabelaProdutosComponent implements OnInit {

  constructor(private produtoService: ProdutoService,private modalService: NgbModal) { }
  produtos: Produto[] = [];
  produtosFiltrado: Produto[] = [];
  filtrar: string | any;

  ngOnInit(): void {
    this.produtoService.todas().subscribe((x) => this.produtos = x)
  }

  onClickExluirProduto(id: number | undefined) {
    this.produtoService.excluir(id).subscribe((x) => {
      console.log("exluido" );
    })
  }

  onChangeFilter() {
    this.produtosFiltrado = this.produtos.filter(produto => {
      return produto.nome.includes(this.filtrar);
    })
  }

  abrirModal(produto: Produto) {
    const modalRef = this.modalService.open(ModalEditarProdutosComponent)
    modalRef.componentInstance.produto = produto;
  }
}
