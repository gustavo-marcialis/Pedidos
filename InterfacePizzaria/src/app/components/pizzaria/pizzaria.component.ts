import { Component } from '@angular/core';
import { PedidosService } from 'src/app/pedidos.service';
import { Pedido } from 'src/app/pedido';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-pizzaria',
  templateUrl: './pizzaria.component.html',
  styleUrls: ['./pizzaria.component.css']
})
export class PizzariaComponent {
  pedido = {} as Pedido;
  pedidos: Pedido[] = [];

  constructor(private pedidosService: PedidosService) {}

  GetPedidos() {
    this.pedidosService.getPedidos().subscribe((pedidos: Pedido[]) => {
      this.pedidos = pedidos;
    });
  }

  GetPedidoById(id : number) {
    this.pedidosService.getPedidoById(id).subscribe((pedidos: Pedido) => {
      this.pedido = pedidos;
    });
  }

  DeletePedido(pedido: Pedido) {
    this.pedidosService.deletePedido(pedido).subscribe(() => {
      this.GetPedidos();
    });
  }

  PutPedido(pedido: Pedido) {
    this.pedido = { ...pedido };
  }

}


