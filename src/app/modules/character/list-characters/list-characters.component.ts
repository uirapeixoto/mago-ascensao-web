import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/model/Personagem';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.css']
})
export class ListCharactersComponent implements OnInit {
  usuario: Usuario;
  usuarios: Usuario[];
  constructor(private service: CharacterService) { }

  ngOnInit(): void {
    this.buscarUsuarios();
  }

  buscarUsuarios(){
    this.service.buscarUsuarios().subscribe((response:Usuario[]) => {
      console.log(response);
      this.usuarios = response;
      console.log(this.usuarios);
    })
  }

}
