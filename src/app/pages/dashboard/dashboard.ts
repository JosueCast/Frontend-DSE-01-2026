import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
//aqui podemos crear variables y funciones para usar en el html
  totalClientes = 3;
  totalCuentas = 10;
  totalTiposCuenta = 2;
}
