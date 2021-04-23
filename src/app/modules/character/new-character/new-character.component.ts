import { Atributos, FichaPersonagem, Personagem, Usuario } from './../../../model/Personagem';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-new-character',
  templateUrl: './new-character.component.html',
  styleUrls: ['./new-character.component.css']
})
export class NewCharacterComponent implements OnInit {

  usuario = {} as  Usuario;
  fichaPersonagem = {} as FichaPersonagem;
  personagem = {} as  Personagem;
  atributo = {} as Atributos;
  
  constructor() { 
    var data = new Date();
    this.usuario.data_criacao = data.toLocaleDateString();
    this.usuario.data_alteracao = data.toLocaleDateString();
  }

  ngOnInit(): void {
  }
  
  onSubmit(form: NgForm) {
    console.log(form.value);  // { first: '', last: '' }
    console.log(form.valid);  // false
    console.log("objeto usuario");
    console.log(this.usuario);
    console.log("objeto persongem");
    console.log(this.personagem);
  }

}
