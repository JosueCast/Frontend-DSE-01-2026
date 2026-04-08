import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-clientes-list',
  imports: [CommonModule],
  templateUrl: './clientes-list.html',
  styleUrl: './clientes-list.css',
})
export class ClientesList {

   clientes = [
    { codigo: 'C001', nombre: 'Juan Pérez', dui: '12345678-9', telefono: '7000-0000', estado: 'Activo' },
    { codigo: 'C002', nombre: 'María López', dui: '98765432-1', telefono: '7111-1111', estado: 'Inactivo' },
    { codigo: 'C003', nombre: 'Carlos Gómez', dui: '45678912-3', telefono: '7222-2222', estado: 'Activo' }
  ];

}
