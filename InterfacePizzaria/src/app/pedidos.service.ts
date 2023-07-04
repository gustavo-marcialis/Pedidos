import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Pedido } from './pedido';
@Injectable({
  providedIn: 'root'
})
export class PedidosService {
  url = 'https://localhost:7190/api/API/pedidos';
  urlCliente = 'https://localhost:7190/api/Cliente/pedidosCliente';

  constructor(private httpClient: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getPedidos(): Observable<Pedido[]> {
    return this.httpClient.get<Pedido[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  getPedidoById(id: number): Observable<Pedido> {
    return this.httpClient.get<Pedido>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  getPedidoByMesa(mesa: string): Observable<Pedido> {
    return this.httpClient.get<Pedido>(this.urlCliente + '/' + mesa)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  savePedido(pedido: Pedido) : Observable<Pedido>{
    return this.httpClient.post<Pedido>(this.urlCliente, JSON.stringify(pedido), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  updatePedido(pedido: Pedido): Observable<Pedido> {
    return this.httpClient.put<Pedido>(this.url + '/' + pedido.id, JSON.stringify(pedido),
     this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  deletePedido(pedido: Pedido) {
    return this.httpClient.delete<Pedido>(this.url + '/' + pedido.id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  addPedido(pedido: Pedido){
    console.log(this.url, JSON.stringify(pedido))
    return this.httpClient.post<Pedido>(this.urlCliente, JSON.stringify(pedido))
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + 
      `mensagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}