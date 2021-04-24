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
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NewCharacterComponent,
    EditCharacterComponent,
    ViewCharacterComponent,
    ListCharactersComponent,
    HomeCharacterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
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
