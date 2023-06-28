import { HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({
    
  })
}

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor() { }
}
