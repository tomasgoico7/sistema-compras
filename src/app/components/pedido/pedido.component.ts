import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Articulo, Vendedor } from '../../models/models';

@Component({
  selector: 'app-pedido',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css'],
})
export class PedidoComponent implements OnInit {
  articulos: Articulo[] = [];
  vendedores: Vendedor[] = [];
  selectedVendedor: string = '';
  selectedArticulos: Articulo[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.cargarArticulos();
    this.cargarVendedores();
  }

  cargarArticulos(): void {
    this.articulos = [
      {
        codigo: 'K1020',
        descripcion: 'Colchon Telgo',
        precio: 10256.12,
        deposito: 1,
      },
      {
        codigo: 'K1022%%',
        descripcion: 'Colchon Seally',
        precio: 18256.12,
        deposito: 4,
      },
      {
        codigo: 'K1024',
        descripcion: 'Sommier Telgo',
        precio: 14256.12,
        deposito: 1,
      },
      {
        codigo: 'K1026',
        descripcion: 'Sommier Seally',
        precio: 13256.12,
        deposito: 1,
      },
      {
        codigo: 'F1026',
        descripcion: 'Almohada Seally',
        precio: 0,
        deposito: 1,
      },
      {
        codigo: 'F1026',
        descripcion: 'Almohada Seally',
        precio: 3250.12,
        deposito: 4,
      },
      {
        codigo: 'K1024',
        descripcion: 'Sommier Telgo',
        precio: 14256.12,
        deposito: 4,
      },
      {
        codigo: 'K1026',
        descripcion: 'Sommier Seally',
        precio: -13256.12,
        deposito: 8,
      },
      {
        codigo: 'K!°1026',
        descripcion: 'Sommier Seally',
        precio: -13256.12,
        deposito: 8,
      },
    ];
  }

  cargarVendedores(): void {
    this.http
      .get<Vendedor[]>(
        'https://run.mocky.io/v3/c70569d3-9e72-48fb-8e77-3b8b00ceb0bc'
      )
      .subscribe((data: Vendedor[]) => (this.vendedores = data));
  }

  toggleArticulo(articulo: Articulo): void {
    const index = this.selectedArticulos.indexOf(articulo);
    if (index > -1) {
      this.selectedArticulos.splice(index, 1);
    } else {
      this.selectedArticulos.push(articulo);
    }
  }

  guardarPedido(): void {
    if (this.selectedArticulos.length === 0) {
      alert('Debe seleccionar al menos un artículo.');
    } else {
      // Lógica para guardar el pedido
      alert('Pedido guardado con éxito.');
    }
  }
}
