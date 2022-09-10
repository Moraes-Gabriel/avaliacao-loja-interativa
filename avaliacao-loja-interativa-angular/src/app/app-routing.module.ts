import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FabricanteComponent } from './fabricante/fabricante.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { TabelaProdutosComponent } from './tabela-produtos/tabela-produtos.component';

const routes: Routes = [
  { path: '', redirectTo: 'produtos', pathMatch: 'full' },
  { path: 'novo-produto', component: ProdutosComponent },
  { path: 'novo-fabricante', component: FabricanteComponent },
  { path: 'produtos', component: TabelaProdutosComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
