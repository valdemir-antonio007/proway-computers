import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {

  formulario = this.fb.group({
    nome: ["", [Validators.required, Validators.minLength(5)]],
    assunto: ["",[Validators.required, Validators.minLength(10)]],
    telefone: ["",[Validators.required, Validators.minLength(10)]],
    email: ["",[Validators.required, Validators.email]],
    mensagem: ["", [Validators.required, Validators.minLength(10)]]
  })

  constructor(private fb: FormBuilder){}

}
