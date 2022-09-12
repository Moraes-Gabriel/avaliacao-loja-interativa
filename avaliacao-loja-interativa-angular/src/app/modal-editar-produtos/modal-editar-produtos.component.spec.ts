import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarProdutosComponent } from "./ModalEditarProdutosComponent";

describe('ModalEditarProdutosComponent', () => {
  let component: ModalEditarProdutosComponent;
  let fixture: ComponentFixture<ModalEditarProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditarProdutosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditarProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
