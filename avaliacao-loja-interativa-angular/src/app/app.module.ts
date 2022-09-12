import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FabricanteComponent } from './fabricante/fabricante.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { TabelaProdutosComponent } from './tabela-produtos/tabela-produtos.component';
import { ModalEditarProdutosComponent } from './modal-editar-produtos/modal-editar-produtos.component';
@NgModule({
  declarations: [
    AppComponent,
    FabricanteComponent,
    ProdutosComponent,
    TabelaProdutosComponent,
    ModalEditarProdutosComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
