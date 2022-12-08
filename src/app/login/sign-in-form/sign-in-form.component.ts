import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent {
  login: string ="";
  password: string ="";
  rememberMe: boolean = false;

  constructor( private router: Router ) {}

  signIn() {
    if(this.login != "" && this.password != ""){
      console.log("Attention l'utilisateur "+this.login+" n'a pas été connecté avec "
      +this.password+" et remember me est à "+this.rememberMe);
      this.router.navigateByUrl("/messenger");
    } else {
      console.log("Il manque des informations");
    }
  }

  signInWithGoogle(x:boolean) {
    console.log("Attention l'utilisateur n'a pas été connecté avec Google");
    this.router.navigateByUrl("/messenger");
    //throw new Error('Method not implemented.');
  }




  forgetPassword() {
    console.log("Attention l'utilisateur n'a pas été rappeler son mot de passe");

  }

  setLogin(login: string){
    if(true){ //login == email || mobile number
      this.login = login;
    }
  }
  setPassword(password: string){
    this.password = password;
  }
  setRememberMe(rememberMe: boolean){
    this.rememberMe = rememberMe;
  }
}
