import { Component, Input } from '@angular/core';
import { Cliente } from '../cliente-inserir/cliente.inserir.interface';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css'],
})
export class ClienteListaComponent {
  @Input() clientes: Cliente[] = [];

  constructor() {}
}