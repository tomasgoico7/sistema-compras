import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Articulo {
  codigo: string;
  descripcion: string;
  precio: number;
  deposito: number;
}

export interface Vendedor {
  id: number;
  nombre: string;
}

@Injectable({
  providedIn: 'root',
})
export class ArticuloService {
  private apiUrlArticulos = `${environment.apiUrl}/api/articulos`;
  private apiUrlVendedores =
    'https://run.mocky.io/v3/c70569d3-9e72-48fb-8e77-3b8b00ceb0bc';

  constructor(private http: HttpClient) {}

  getArticulos(): Observable<Articulo[]> {
    return this.http.get<Articulo[]>(this.apiUrlArticulos);
  }

  getVendedores(): Observable<Vendedor[]> {
    return this.http.get<Vendedor[]>(this.apiUrlVendedores);
  }
}
