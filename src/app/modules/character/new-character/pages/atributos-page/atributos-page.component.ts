import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Atributos } from 'src/app/model/Personagem';

@Component({
  selector: 'app-atributos-page',
  templateUrl: './atributos-page.component.html',
  styleUrls: ['./atributos-page.component.css']
})
export class AtributosPageComponent implements OnInit {

  atributo = {} as Atributos;

  options = [
    {value:0, label:0},
    {value:1, label:1},
    {value:2, label:2},
    {value:3, label:3},
    {value:4, label:4},
    {value:5, label:5},
  ]

  constructor() {
    this.atributo.forca = 1;
    this.atributo.carisma = 1;
    this.atributo.percepcao = 1;
    this.atributo.destreza = 1;
    this.atributo.manipulacao = 1;
    this.atributo.inteligencia = 1;
    this.atributo.vigor = 1;
    this.atributo.aparencia = 1;
    this.atributo.raciocinio = 1;
   }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);  // { first: '', last: '' }
    console.log(form.valid);  // false
    console.log("objeto atributo");
    console.log(this.atributo);
  }

}
