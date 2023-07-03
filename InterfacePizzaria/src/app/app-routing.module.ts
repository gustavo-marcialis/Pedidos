import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { PizzariaComponent } from './components/pizzaria/pizzaria.component';

const routes: Routes = [
  { path: 'pedidos', component: PedidosComponent },
  { path: 'pizzaria', component:PizzariaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }