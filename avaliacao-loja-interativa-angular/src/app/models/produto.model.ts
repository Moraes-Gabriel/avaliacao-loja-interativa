import { Categoria } from "./categoria.model";
import { Fabricante } from "./fabricante.model";

export interface Produto {
    id?: number;
    nome: string;
    fabricante: Fabricante;
    categoria: Categoria;
    price: number;
  }
  