import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css'],
})
export class PedidosComponent implements OnInit {
  formulario!: FormGroup;
  tituloFormulario!: string;

  constructor() {}

  ngOnInit(): void {
    this.tituloFormulario = 'Fazer Pedido';
    this.formulario = new FormGroup({
      mesa: new FormControl(null),
      sabores: new FormControl(null),
      obs: new FormControl(null),
    });
  }

  get mesa() {
    return this.formulario.get('mesa');
  }

  get sabores() {
    return this.formulario.get('sabores');
  }

  get obs() {
    return this.formulario.get('obs');
  }
}
