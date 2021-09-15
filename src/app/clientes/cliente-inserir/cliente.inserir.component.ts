import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cliente } from './cliente.inserir.interface';

@Component({
  selector: 'app-cliente-inserir',
  styleUrls: ['./cliente.inserir.component.css'],
  templateUrl: './cliente.inserir.component.html',
})
export class ClienteInserirComponent {
  @Output() clienteAdicionado = new EventEmitter<Cliente>();

  onAdicionarCliente(form: NgForm) {
    if (form.invalid) return;

    const cliente = {
      nome: form.value.nome,
      email: form.value.email,
      telefone: form.value.telefone,
    } as Cliente;

    this.clienteAdicionado.emit(cliente);
  }
}
