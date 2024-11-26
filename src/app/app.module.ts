import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { IntroduceComponent } from './components/introduce/introduce.component';
import { LoginComponent } from './components/login/login.component';
import { PersonalPageComponent } from './components/personal-page/personal-page.component';
import { AdoptedPetComponent } from './components/adopted-pet/adopted-pet.component';
import { RouterModule } from '@angular/router';

import { CheckboxModule } from 'primeng/checkbox';

import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import {MatProgressBarModule} from '@angular/material/progress-bar'; 
import {MatButtonModule} from '@angular/material/button'; 
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { MatRadioModule } from '@angular/material/radio';
import { MatChipsModule } from '@angular/material/chips';
import { ChipPatternComponent } from './chip-pattern/chip-pattern.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { PetCardComponent } from './pet-card/pet-card.component';
import {MatTabsModule} from '@angular/material/tabs'; 
import { CarouselModule } from 'primeng/carousel';  
import {MatSnackBarModule} from '@angular/material/snack-bar'; 
import {MatExpansionModule} from '@angular/material/expansion'; 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    IntroduceComponent,
    LoginComponent,
    PersonalPageComponent,
    AdoptedPetComponent,
    RegisterFormComponent,
    ChipPatternComponent,
    PetCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    MatDialogModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatStepperModule,
    MatRadioModule,
    MatChipsModule,
    MatAutocompleteModule,
    CheckboxModule,
    MatTabsModule,
    CarouselModule,
    MatSnackBarModule,
    MatExpansionModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
