import { Atributos, Conhecimento, Esferas, FichaPersonagem, Habilidades, Pericias, Personagem, Talentos, Usuario } from './../../../model/Personagem';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PropertyBindingType } from '@angular/compiler';

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
  habilidades = {} as Habilidades;
  talentos = {} as Talentos;
  pericias = {} as Pericias;
  conhecimento = {} as Conhecimento;
  esferas = {} as Esferas;
    
  options = [
    {value:0, label:0},
    {value:1, label:1},
    {value:2, label:2},
    {value:3, label:3},
    {value:4, label:4},
    {value:5, label:5},
  ]
  selected = this.options[0].value;
    
  constructor() { 
    var data = new Date();
    this.usuario.data_criacao = data.toLocaleDateString();
    this.usuario.data_alteracao = data.toLocaleDateString();
    
    this.atributo.forca = 1;
    this.atributo.carisma = 1;
    this.atributo.percepcao = 1;
    this.atributo.destreza = 1;
    this.atributo.manipulacao = 1;
    this.atributo.inteligencia = 1;
    this.atributo.vigor = 1;
    this.atributo.aparencia = 1;
    this.atributo.raciocinio = 1;

    this.talentos.prontidao = 0;
    this.talentos.esportes= 0;
    this.talentos.consciencia= 0;
    this.talentos.briga= 0;
    this.talentos.esquiva= 0;
    this.talentos.expressao= 0;
    this.talentos.intimidacao= 0;
    this.talentos.lideranca= 0;
    this.talentos.manha= 0;
    this.talentos.labia= 0;

    this.pericias.oficios= 0;
    this.pericias.conducao= 0;
    this.pericias.etiqueta= 0;
    this.pericias.armas_fogo= 0;
    this.pericias.meditacao= 0;
    this.pericias.armas_brancas= 0;
    this.pericias.atuacao= 0;
    this.pericias.furtividade= 0;
    this.pericias.sobrevivencia= 0;
    this.pericias.tecnologia= 0;

    this.conhecimento.academicos= 0;
    this.conhecimento.computador= 0;
    this.conhecimento.enigmas= 0;
    this.conhecimento.investigacao= 0;
    this.conhecimento.cosmologia = 0;
    this.conhecimento.direito= 0;
    this.conhecimento.linguistica= 0;
    this.conhecimento.medicina= 0;
    this.conhecimento.ocultismo= 0;
    this.conhecimento.ciencias= 0;
    
    this.esferas.correspondencia= 0;
    this.esferas.entropia= 0;
    this.esferas.forcas= 0;
    this.esferas.vida= 0;
    this.esferas.mente= 0;
    this.esferas.materia= 0;
    this.esferas.primordio= 0;
    this.esferas.espirito= 0;
    this.esferas.tempo= 0;
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

  mostrarProps(obj) {
      for (var [key, value] of Object.entries(obj)) {
        //value = 0;
        if(obj[key] == Number){
          obj[key] = 0;
        }
        console.log(key + ' ' + value); // "a 5", "b 7", "c 9"
      }
  }

}
