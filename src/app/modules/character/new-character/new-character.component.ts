import { Personagem, Usuario } from './../../../model/Personagem';
import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Output } from '@angular/core';

@Component({
  selector: 'app-new-character',
  templateUrl: './new-character.component.html',
  styleUrls: ['./new-character.component.css']
})
export class NewCharacterComponent implements OnInit {

  isLinear = false;
  usuarioFormGroup: FormGroup;
  isEditable = false;

  @Input() receberPersonagem : Personagem;
  @Output() respostaUsuario = new EventEmitter();

  usuario = {} as  Usuario;
  personagem = {} as Personagem;
    
  constructor(private _formBuilder: FormBuilder) { 
    var data = new Date();
    this.usuario.data_criacao = data.toLocaleDateString();
    this.usuario.data_alteracao = data.toLocaleDateString();
  }

  ngOnInit(): void {
    console.log('new-character');
  }

  mostrarProps(obj) {
    for (var [key, value] of Object.entries(obj)) {
      //value = 0;
      if (obj[key] == Number) {
        obj[key] = 0;
      }
      console.log(key + ' ' + value); // "a 5", "b 7", "c 9"
    }
  }

  feedback() {
    console.log('Resposta para o component pai', this.respostaUsuario.emit({"nome": "Raphella", "SobreNome": "Souza"}));
  }

  // função para receber emit Output do Filho
  reciverFeedback(respostaFilho) {
    console.log('Foi emitido o evento e chegou no pai >>>> ', respostaFilho);
  }
}
