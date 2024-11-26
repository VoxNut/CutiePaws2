import { Component } from '@angular/core';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(){
  }

  chooseEmail : boolean = false;

  clickEmail() : void {
    this.chooseEmail = true;
  }
 
  onSubmit(form: any) {
    console.log(form.value);
  }

  cancel() : void {
    this.chooseEmail = false;
  }

} 
