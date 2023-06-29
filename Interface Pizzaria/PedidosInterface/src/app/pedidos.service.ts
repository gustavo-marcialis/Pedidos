import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pedidos } from 'src/Pedido';

const httpOptions(
  headers: new HttpHeaders ({
    'Content-Type' : 'application/json'
  })
);

@Injectable({
  providedIn: 'root'
})
export class PedidosService { 
  url = 'https://localhost:7190/api/API/pedidos'

  constructor(private http: HttpClient) { } 
    GetTodos(): Observable<Pedidos[]> {
      return this.http.get<Pedidos[]>(this.url);
    }

    GetId(pedidosid: number): Observable<Pedidos> {
      const apiUrl = '${this.url}/${pedidosid}'
      return this.http.get<Pedidos>(apiUrl);
    }

    PostPedido(pedidos: Pedidos) : Observable<any> {
      return this.http.post<Pedidos>(this.url, Pedidos, httpOptions);
    }

    PutPedido(pedidos: Pedidos) : Observable<any> {
      return this.http.put<Pedidos>(this.url, pedidos, httpOptions);
    }

    DeletePedido(pedidosid: numberr) : Observable<any> {
      const apiUrl = '${this.url})${pedidosid}';
      return this.http.delete<number>(apiUrl, httpOptions);
    }
  }

