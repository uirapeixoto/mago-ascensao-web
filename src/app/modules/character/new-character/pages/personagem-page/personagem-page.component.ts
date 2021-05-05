import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';
import { FichaPersonagem, Personagem, Preludio, Usuario } from 'src/app/model/Personagem';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-personagem-page',
  templateUrl: './personagem-page.component.html',
  styleUrls: ['./personagem-page.component.css']
})
export class PersonagemPageComponent implements OnInit {
  
  @Input() recebePersonagem : Personagem;
  @Output() respostaUsuario  = new EventEmitter();


  currentItem = 'Television';
  personagem = {} as Personagem;
  usuario = {} as Usuario;
  fichaPersonagem = {} as FichaPersonagem;
  preludio = {} as Preludio;
  id : number = 1;

  constructor(private _api: CharacterService) { 
    
    this._api.buscarUsuarioPorId(this.id).subscribe((response:Usuario) => {
      this.usuario = response;
      this.personagem = response.ficha_personagem[0].personagem;
      this.preludio = response.ficha_personagem[0].preludio;
    })
    
  }

  ngOnInit(): void {
      this.recebePersonagem = this.personagem;
      console.log(this.recebePersonagem);
      console.log('Objeto familia recebido do component pai via Input: ', this.respostaUsuario);
  }

  onSubmit(form: NgForm) {
    const data  = new Date();
    debugger;
    this.usuario.data_alteracao = data.toLocaleDateString('pt-BR');;
    this.fichaPersonagem.personagem = this.personagem;
    this.fichaPersonagem.preludio = this.preludio;

    this.usuario.ficha_personagem[0] = this.fichaPersonagem;

    console.log(this.usuario);
    
    this._api.atualizarUsuario(this.usuario).subscribe((response:Usuario) =>{
      this.usuario = response;
    });
    console.log(form.value);  // { first: '', last: '' }
    console.log(form.valid);  // false
    console.log("objeto persongem");
    console.log(this.fichaPersonagem);
  }

  

}
