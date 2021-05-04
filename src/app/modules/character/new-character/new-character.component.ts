import { Usuario } from './../../../model/Personagem';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-character',
  templateUrl: './new-character.component.html',
  styleUrls: ['./new-character.component.css']
})
export class NewCharacterComponent implements OnInit {

  isLinear = false;
  usuarioFormGroup: FormGroup;
  isEditable = false;

  @Input() receberUsuario;

  usuario = {} as  Usuario;
    
  constructor(private _formBuilder: FormBuilder) { 
    var data = new Date();
    this.usuario.data_criacao = data.toLocaleDateString();
    this.usuario.data_alteracao = data.toLocaleDateString();
  }

  ngOnInit(): void {
    console.log(this.receberUsuario);
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
}
