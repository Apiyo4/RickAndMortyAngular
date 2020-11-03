import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { CharactersComponent } from './characters/characters.component';


const routes:Routes =[
{path:'characters', component:CharactersComponent},
{path:'about', component:AboutComponent},
{path:'characters/:id', component:CharacterDetailsComponent},
{path: '', redirectTo:'about', pathMatch:'full'}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)
 
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
