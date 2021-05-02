import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StarRatingColor } from 'src/app/components/star-rating/star-rating.component';
import { Esferas } from 'src/app/model/Personagem';

@Component({
  selector: 'app-esfera-page',
  templateUrl: './esfera-page.component.html',
  styleUrls: ['./esfera-page.component.css']
})
export class EsferaPageComponent implements OnInit {

  rating:number = 2;
  starCount:number = 5;
  starColor:StarRatingColor = StarRatingColor.accent;
  starColorP:StarRatingColor = StarRatingColor.primary;
  starColorW:StarRatingColor = StarRatingColor.warn;

  esferas = {} as Esferas;

  constructor() {
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
    console.log("objeto esferas");
    console.log(this.esferas);
  }

  onRatingChanged(rating){
    console.log(rating);
    this.rating = rating;
  }

}
