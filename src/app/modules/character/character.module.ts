import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewCharacterComponent } from './new-character/new-character.component';
import { EditCharacterComponent } from './edit-character/edit-character.component';
import { ViewCharacterComponent } from './view-character/view-character.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { RoutingCharacterModule } from './routing-character/routing-character.module';
import { ListCharactersComponent } from './list-characters/list-characters.component';

@NgModule({
  declarations: [
    NewCharacterComponent,
    EditCharacterComponent,
    ViewCharacterComponent,
    ListCharactersComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatGridListModule,
    RoutingCharacterModule
  ],
  exports: [
    NewCharacterComponent,
    EditCharacterComponent,
    ViewCharacterComponent
  ]
})
export class CharacterModule { }
