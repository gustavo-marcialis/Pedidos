import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  formulario: any;
  tituloFormulario: string;

  constructor() { }

  ngOnInit(): void {
    this.tituloFormulario = 'Fazer Pedido';

    this.formulario = new FormGroup({
      mesa: new FormControl(null),
      sabores: new FormControl(null),
      obs: new FormControl(null)
    });
  }
}

}


function ngOnInit() {

}

