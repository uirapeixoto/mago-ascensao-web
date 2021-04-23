import { Atributos, FichaPersonagem, Personagem, Usuario } from './../../../model/Personagem';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StarRatingComponent } from 'ng-starrating';
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
  options = [
    {value:1, label:1},
    {value:2, label:2},
    {value:3, label:3},
    {value:4, label:4},
    {value:5, label:5},
  ]
    
  constructor() { 
    var data = new Date();
    this.usuario.data_criacao = data.toLocaleDateString();
    this.usuario.data_alteracao = data.toLocaleDateString();
  }

  ngOnInit(): void {
  }
  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    alert(`Old Value:${$event.oldValue}, 
      New Value: ${$event.newValue}, 
      Checked Color: ${$event.starRating.checkedcolor}, 
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
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
