import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewCharacterComponent } from './new-character/new-character.component';
import { EditCharacterComponent } from './edit-character/edit-character.component';
import { ViewCharacterComponent } from './view-character/view-character.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { RoutingCharacterModule } from './routing-character/routing-character.module';
import { ListCharactersComponent } from './list-characters/list-characters.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select'
import { HomeCharacterComponent } from './home-character/home-character.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { StarRatingComponent } from 'src/app/components/star-rating/star-rating.component';
import { AtributosPageComponent } from './new-character/pages/atributos-page/atributos-page.component'
import { MatStepperModule } from '@angular/material/stepper';
import { PersonagemPageComponent } from './new-character/pages/personagem-page/personagem-page.component';
import { HabilidadesPageComponent } from './new-character/pages/habilidades-page/habilidades-page.component';
import { EsferaPageComponent } from './new-character/pages/esfera-page/esfera-page.component';
import { VantagensPageComponent } from './new-character/pages/vantagens-page/vantagens-page.component';


@NgModule({
  declarations: [
    NewCharacterComponent,
    EditCharacterComponent,
    ViewCharacterComponent,
    ListCharactersComponent,
    HomeCharacterComponent,
    StarRatingComponent,
    AtributosPageComponent,
    PersonagemPageComponent,
    HabilidadesPageComponent,
    EsferaPageComponent,
    VantagensPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatStepperModule,
    RoutingCharacterModule
  ],
  exports: [
    NewCharacterComponent,
    EditCharacterComponent,
    ViewCharacterComponent,
    ListCharactersComponent
  ]
})
export class CharacterModule { }
