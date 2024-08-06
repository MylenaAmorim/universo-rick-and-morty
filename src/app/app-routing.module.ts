import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './view/characters/characters.component';
import { HomeComponent } from './view/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'personagens',
    // canActivate: [JwtGuard],
    data: { role: 'ROLE_NAME' },
    loadChildren: () => import('./view/characters/characters.module').then(m => m.CharactersModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
