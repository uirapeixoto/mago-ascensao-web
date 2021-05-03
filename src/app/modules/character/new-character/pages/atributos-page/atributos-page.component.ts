import { Component, OnInit, Input, EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Atributos, Usuario, FichaPersonagem } from 'src/app/model/Personagem';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-atributos-page',
  templateUrl: './atributos-page.component.html',
  styleUrls: ['./atributos-page.component.css']
})
export class AtributosPageComponent implements OnInit {

  @Input() item: string; // decorate the property with @Input()
  atributo = {} as Atributos;
  usuario = {} as Usuario;
  ficha_persongem = {} as FichaPersonagem;
  

  options = [
    {value:0, label:0},
    {value:1, label:1},
    {value:2, label:2},
    {value:3, label:3},
    {value:4, label:4},
    {value:5, label:5},
  ]

  constructor(private service : CharacterService) {
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

    this.service.buscarUsuarioPorId(this.usuario.id).subscribe((response: Usuario) => {
      this.usuario = response;
    })

    this.usuario.ficha_personagem[0].atributos = this.atributo;

    this.service.atualizarUsuario(this.usuario).subscribe((response: Usuario) => {
      console.log(this.usuario);
    })

    console.log(form.value);  // { first: '', last: '' }
    console.log(form.valid);  // false
    console.log("objeto atributo");
    console.log(this.atributo);
  }

   
}
