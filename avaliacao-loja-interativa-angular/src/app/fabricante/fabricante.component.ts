import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Fabricante } from '../models/fabricante.model';
import { FabricanteService } from '../services/fabricante.service';

@Component({
  selector: 'app-fabricante',
  templateUrl: './fabricante.component.html',
  styleUrls: ['./fabricante.component.scss']
})
export class FabricanteComponent {

  constructor(private service: FabricanteService){
  }
  nome: String | any;
  categoria1: String | any;
  categoria3: String | any;
  categoria2: String | any;
  
  criar() {
      const valorEnviar: Fabricante = {nome: this.nome, categoria1: this.categoria1, categoria2: this.categoria2, categoria3: this.categoria3}
      this.service.criar(valorEnviar).subscribe((x) => {
        this.limparCampos();
      });  
      this.service.todas();  
    }
  limparCampos() {
    this.nome = "";
    this.categoria1= "";
    this.categoria2= "";
    this.categoria3= "";
  }
}
