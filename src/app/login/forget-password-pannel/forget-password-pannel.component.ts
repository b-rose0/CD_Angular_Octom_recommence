import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password-pannel',
  templateUrl: './forget-password-pannel.component.html',
  styleUrls: ['./forget-password-pannel.component.scss']
})
export class ForgetPasswordPannelComponent {
  email: string = "";
  
  constructor( private router: Router ) {}

  sendChangePasswordLink() {
    //TO DO envoyer le lien
    if(this.email != "") {
      console.log("Attention le lien n'a pas été envoyé");
      this.router.navigateByUrl("/login");
    } else {
      console.log("Veuillez indiquer une adresse email")
    }
  }

  setEmail(email: string){
    this.email = email;
  }
}
