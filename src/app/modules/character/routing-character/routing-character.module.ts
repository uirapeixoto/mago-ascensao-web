import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ViewCharacterComponent } from '../view-character/view-character.component';
import { NewCharacterComponent } from '../new-character/new-character.component';
import { EditCharacterComponent } from '../edit-character/edit-character.component';

const characterRoutes : Routes = [
  {
      path:'', 
      component: ViewCharacterComponent,
      data: { title: 'Personagem'},
      children: [
        { path: 'view', component: ViewCharacterComponent },
        { path: 'add', component: NewCharacterComponent },
        { path: 'edit', component: EditCharacterComponent }
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
