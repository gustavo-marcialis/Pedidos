import { Component } from '@angular/core';
import { PedidosService } from 'src/app/pedidos.service';
import { Pedido } from 'src/app/pedido';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css'],
})
export class PedidosComponent {
  tituloFormulario = 'Fazer Pedido';

  pedido = {} as Pedido;
  pedidos: Pedido[] = [];

  constructor(private pedidosService: PedidosService) {}


  savePedido(form: NgForm) {
    if (this.pedido.id !== undefined) {
      this.pedidosService.savePedido(this.pedido).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.pedidosService.savePedido(this.pedido).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }

  GetPedidos() {
    this.pedidosService.getPedidos().subscribe((pedidos: Pedido[]) => {
      this.pedidos = pedidos;
    });
  }

  GetPedidoByMesa(mesa : string) {
    this.pedidosService.getPedidoByMesa(mesa).subscribe((pedidos: Pedido) => {
      this.pedido = pedidos;
    });
  }

  cleanForm(form: NgForm) {
    this.GetPedidos();
    form.resetForm();
    this.pedido = {} as Pedido;
  }

}