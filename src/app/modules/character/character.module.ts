import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewCharacterComponent } from './new-character/new-character.component';
import { EditCharacterComponent } from './edit-character/edit-character.component';
import { ViewCharacterComponent } from './view-character/view-character.component';
import { MatTabsModule } from '@angular/material/tabs';
import { RoutingCharacterModule } from './routing-character/routing-character.module';

@NgModule({
  declarations: [
    NewCharacterComponent,
    EditCharacterComponent,
    ViewCharacterComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    RoutingCharacterModule
  ],
  exports: [
    NewCharacterComponent,
    EditCharacterComponent,
    ViewCharacterComponent
  ]
})
export class CharacterModule { }
