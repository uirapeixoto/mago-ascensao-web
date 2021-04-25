import { Component, OnInit } from '@angular/core';
import { StarRatingColor } from 'src/app/components/star-rating/star-rating.component';
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

  rating:number = 2;
  starCount:number = 5;
  starColor:StarRatingColor = StarRatingColor.accent;
  starColorP:StarRatingColor = StarRatingColor.primary;
  starColorW:StarRatingColor = StarRatingColor.warn;

  constructor(private _api: CharacterService) { }

  ngOnInit(): void {
  }

  buscarUsuarioPorId(id: number){
    this._api.buscarUsuarioPorId(id).subscribe((response:Usuario) => {
      this.usuario = response;
    })
  }

  onRatingChanged(rating){
    console.log(rating);
    this.rating = rating;
  }
}
