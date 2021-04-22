import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ViewCharacterComponent } from '../view-character/view-character.component';
import { NewCharacterComponent } from '../new-character/new-character.component';
import { EditCharacterComponent } from '../edit-character/edit-character.component';
import { ListCharactersComponent } from '../list-characters/list-characters.component';

const characterRoutes : Routes = [
  {
      path:'', 
      component: ListCharactersComponent,
      data: { title: 'Personagem'},
      children: [
        { path: 'view/:id', component: ViewCharacterComponent },
        { path: 'add',  component: NewCharacterComponent },
        { path: 'edit/:id', component: EditCharacterComponent },
        { path: 'list', component: ListCharactersComponent },
      ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(characterRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingCharacterModule { }
