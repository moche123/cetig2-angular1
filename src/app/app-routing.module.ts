import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { ParentComponent } from './component-communication/parent/parent.component';
import { FriendsComponent } from './friends/friends.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path:'',
    component:  MainComponent
  },
  {
    path:'characters',
    component: CharactersComponent
  },
  {
    path:'friends',
    component: FriendsComponent
  },
  {
    path: 'communication',
    component: ParentComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
