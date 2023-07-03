import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedidos } from './Pedido.';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  url = 'https://localhost:7190/api/API/pedidos';
  urlCliente = 'https://localhost:7190/api/Cliente/pedidosCliente';


  constructor(private http: HttpClient) { }

  GetTodos(): Observable<Pedidos[]> {
    return this.http.get<Pedidos[]>(this.url);
  }

  GetId(pedidoid: number): Observable<Pedidos> {
    const apiUrl = 'https://localhost:7190/api/API/pedidos/{id}';
    return this.http.get<Pedidos>(apiUrl);
  }

  GetMesa(mesa: number): Observable<Pedidos> {
    const apiMesa = 'https://localhost:7190/api/Cliente/pedidosCliente/{Mesa}';
    return this.http.get<Pedidos>(apiUrl);
  }

  PostPedido(pedido: Pedidos): Observable<any> {
    return this.http.post<Pedidos>(this.urlCliente, pedido, httpOptions);
  }

  PutPedido(pedido: Pedidos): Observable<any> {
    return this.http.put<Pedidos>(this.url, pedido, httpOptions);
  }

  DeletPedido(pedidoid: number): Observable<any> {
    const apiUrl = 'https://localhost:7190/api/API/pedidos/{id}';
    return this.http.delete<number>(apiUrl, httpOptions);
  }
}
