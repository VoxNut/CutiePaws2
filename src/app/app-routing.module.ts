import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroduceComponent } from './components/introduce/introduce.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { ChipPatternComponent } from './chip-pattern/chip-pattern.component';
import { PetCardComponent } from './pet-card/pet-card.component';
import { PersonalPageComponent } from './components/personal-page/personal-page.component';

const routes: Routes = [
  {path: "introduce", component : IntroduceComponent}, 
  {path: "login", component : LoginComponent}, 
  {path: "register", component : RegisterFormComponent}, 
  {path: "chip", component : ChipPatternComponent}, 
  {path: "card", component : PetCardComponent}, 
  {path: "personal-page", component : PersonalPageComponent}, 
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
