import { Component } from '@angular/core';
import { PedidosService } from './pedidos.service';
import { Pedido } from './pedido';

import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InterfacePizzaria';
}