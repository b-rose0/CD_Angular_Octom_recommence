import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-pannel',
  templateUrl: './sign-up-pannel.component.html',
  styleUrls: ['./sign-up-pannel.component.scss']
})
export class SignUpPannelComponent {
  termsOfUseAccepted: boolean = false;
  userName: string = "";
  login: string = "";
  password: string = "";
  passwordConfirmation: string = "";


  constructor( private router: Router ) {}


  settermsOfUseAccepted(termsOfUseAccepted: boolean) {
    this.termsOfUseAccepted =termsOfUseAccepted;
  }

  signUp() {
    if(this.userName != "" && this.login != "" && 
    this.password != "" && this.passwordConfirmation != ""){
      if(this.password == this.passwordConfirmation) {
        console.log("Attention l'utilisateur "+this.login+" n'a pas été enregistré avec "
        +this.password+" et terms of use est à "+this.termsOfUseAccepted);
        this.router.navigateByUrl("/octom");
      } else {
        console.log("Le mot de passe n'est pas le même.");

      }
    } else {
      console.log("Il manque des informations");
    }
  }

  setUserName(userName: string){
    this.userName = userName;
  }

  setLogin(login: string){
    this.login = login;
  }
  setPassword(password: string){
    this.password = password;
  }

  setPasswordConfirmation (passwordConfirmation: string){
    this.passwordConfirmation = passwordConfirmation;
  }
}
