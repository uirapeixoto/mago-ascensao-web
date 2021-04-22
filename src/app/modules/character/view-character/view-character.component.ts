import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/Personagem';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-view-character',
  templateUrl: './view-character.component.html',
  styleUrls: ['./view-character.component.css']
})
export class ViewCharacterComponent implements OnInit {

  usuario : Usuario;
  usuarios : Usuario[];

  constructor(private _api: CharacterService) { }

  ngOnInit(): void {
  }

  buscarUsuarioPorId(id: number){
    this._api.buscarUsuarioPorId(id).subscribe((response:Usuario) => {
      this.usuario = response;
    })
  }
}
