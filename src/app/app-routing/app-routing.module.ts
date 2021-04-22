import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path:'personagem',
    loadChildren: () => import('src/app/modules/character/character.module')
      .then(m => m.CharacterModule), 
      data:{ title: 'Personagem'}
  },
  
  // otherwise redirect to home
  { path: '**', redirectTo: '/home', pathMatch:'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
